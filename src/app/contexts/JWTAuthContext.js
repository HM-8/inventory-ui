import React, { createContext, useEffect, useReducer } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { MatxLoading } from 'app/components'

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false
    }

    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000
    return decodedToken.exp > currentTime
}

const setSession = (accessToken, refreshToken, user) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('userID', user.id)
        localStorage.setItem('userName', user.name)
        localStorage.setItem('userImage', user.image)
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    } else {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userID')
        localStorage.removeItem('userName')
        localStorage.removeItem('userImage')
        delete axios.defaults.headers.common.Authorization
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload

            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        case 'REGISTER': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialState,
    method: 'JWT',
    login: () => Promise.resolve(),
    logout: () => {},
    register: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const login = async (userInfo) => {
        const response = await axios.post(
            'http://localhost:4040/v1/auth/login',
            userInfo
        )

        const { tokens, user } = response.data

        const accessToken = tokens.access.token
        const refreshToken = tokens.access.token
        setSession(accessToken, refreshToken, user)

        dispatch({
            type: 'LOGIN',
            payload: {
                user,
            },
        })
    }

    const logout = () => {
        setSession(null)
        dispatch({ type: 'LOGOUT' })
    }

    useEffect(() => {
        ;(async () => {
            try {
                const accessToken = window.localStorage.getItem('accessToken')
                const refreshToken = window.localStorage.getItem('refreshToken')
                const userId = window.localStorage.getItem('userID')
                const AuthStr = `Bearer ${accessToken}`; 

                if (accessToken && userId && isValidToken(accessToken)) {
                    const response = await axios.get(
                        `http://localhost:4040/v1/users/${userId}`,
                        {
                            headers : {
                                'Content-Type' : 'application/json',
                                'Accept' : 'application/json',
                                'Authorization' : AuthStr
                              }
                        }   
                    )
                    const user = response.data
                    console.log("user", user);
                    setSession(accessToken, refreshToken, user)

                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                }
            } catch (err) {
                console.error(err)
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
        })()
    }, [])

    if (!state.isInitialised) {
        return <MatxLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

import useAuth from 'app/hooks/useAuth'
import { flat } from 'app/utils/utils'
import React, { useState, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AllPages } from '../routes/routes'

const getUserRoleAuthStatus = (pathname, user, routes) => {
    if (!user) {
        return false
    }
    const matched = routes.find((r) => r.path === pathname)

    const authenticated =
        matched && matched.auth && matched.auth.length
            ? matched.auth.includes(user.role)
            : true
    console.log(matched, user)
    return authenticated
}

const AuthGuard = ({ children }) => {
    const { isAuthenticated, user } = useAuth()

    const [previouseRoute, setPreviousRoute] = useState(null)
    const { pathname } = useLocation()
    const routes = flat(AllPages())

    console.log(user)

    const isUserRoleAuthenticated = getUserRoleAuthStatus(
        pathname,
        user,
        routes
    )
    let authenticated = isAuthenticated && isUserRoleAuthenticated

    useEffect(() => {
        if (previouseRoute !== null) setPreviousRoute(pathname)
    }, [pathname, previouseRoute])

    if (authenticated) return <>{children}</>
    if (!isAuthenticated) {
        return (
            <Navigate
                to="/session/login"
                state={{ redirectUrl: previouseRoute }}
            />
        )
    } else {
        return (
            <Navigate
                to="/session/404"
                state={{ redirectUrl: previouseRoute }}
            />
        )
    }
}

export default AuthGuard

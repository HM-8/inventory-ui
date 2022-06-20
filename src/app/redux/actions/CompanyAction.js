import axios from 'axios'

export const GET_COMPANY_INFO = 'GET_COMPANY_INFO'
export const ADD_COMPANY_INFO = 'ADD_COMPANY_INFO'
export const UPDATE_COMPANY_INFO = 'UPDATE_COMPANY_INFO'

const accessToken = window.localStorage.getItem('accessToken')
const AuthStr = `Bearer ${accessToken}`

export const getCompanyInfo = () => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/company`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_COMPANY_INFO,
                payload: res.data,
            })
        })
}

export const addCompanyInfo = (values) => (dispatch) => {
    axios
        .post('http://localhost:4040/v1/company/', values, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ADD_COMPANY_INFO,
                payload: res.data,
            })
        })
}

export const updateCompanyInfo = (companyid, values) => (dispatch) => {
    console.log(values)
    delete values.id
    axios
        .patch(`http://localhost:4040/v1/company/${companyid}`, values, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: UPDATE_COMPANY_INFO,
                payload: res.data,
            })
        })
}

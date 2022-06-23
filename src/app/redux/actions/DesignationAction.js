import axios from 'axios'

export const GET_DESIGNATION_INFO = 'GET_DESIGNATION_INFO'
export const GET_ALL_DESIGNATION_INFO = 'GET_ALL_DESIGNATION_INFO'
export const ADD_DESIGNATION_INFO = 'ADD_DESIGNATION_INFO'
export const UPDATE_DESIGNATION_INFO = 'UPDATE_DESIGNATION_INFO'
export const DELETE_DESIGNATION_INFO = 'DELETE_DESIGNATION_INFO'

const accessToken = window.localStorage.getItem('accessToken')
const AuthStr = `Bearer ${accessToken}`

export const getDesignationInfo = (designationid) => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/designation/${designationid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_DESIGNATION_INFO,
                payload: res.data,
            })
        })
}

export const getallDesignations = () => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/designation`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_ALL_DESIGNATION_INFO,
                payload: res.data,
            })
        })
}

export const addDesignationInfo = (data) => (dispatch) => {
    axios
        .post('http://localhost:4040/v1/designation', data)
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ADD_DESIGNATION_INFO,
                payload: res.data,
            })
        })
}

export const deleteDesignationInfo = (designationid) => (dispatch) => {
    axios.delete(`http://localhost:4040/v1/designation/${designationid}`).then((res) => {
        console.log(res.data)
        dispatch({
            type: DELETE_DESIGNATION_INFO,
            payload: res.data,
        })
    })
}

export const updateDesignationInfo = (designationid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/designation/${designationid}`, { data })
        .then((res) => {
            dispatch({
                type: UPDATE_DESIGNATION_INFO,
                payload: res.data,
            })
        })
}

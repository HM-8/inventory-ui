import axios from 'axios'

export const GET_ATTENDANCE_INFO = 'GET_ATTENDANCE_INFO'
export const GET_ALL_ATTENDANCE_INFO = 'GET_ALL_ATTENDANCE_INFO'
export const ADD_ATTENDANCE_INFO = 'ADD_ATTENDANCE_INFO'
export const UPDATE_ATTENDANCE_INFO = 'UPDATE_ATTENDANCE_INFO'
export const DELETE_ATTENDANCE_INFO = 'DELETE_ATTENDANCE_INFO'

const accessToken = window.localStorage.getItem('accessToken')
const AuthStr = `Bearer ${accessToken}`

export const getAttendanceInfo = (attendanceid) => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/attendance/${attendanceid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_ATTENDANCE_INFO,
                payload: res.data,
            })
        })
}

export const getallAttendances = () => (dispatch) => {
    axios
        .get('http://localhost:4040/v1/attendance', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({  
                type: GET_ALL_ATTENDANCE_INFO,
                payload: res.data,
            })
        }).catch((error) => {
            console.log('error', error)
        })
}

export const addAttendanceInfo = (data) => (dispatch) => {
    axios.post('http://localhost:4040/v1/attendance', data).then((res) => {
        console.log("Response Data",res.data)
        dispatch({
            type: ADD_ATTENDANCE_INFO,
            payload: res.data,
        })
    })
}

export const deleteAttendanceInfo = (attendanceid) => (dispatch) => {
    axios
        .delete(`http://localhost:4040/v1/attendance/${attendanceid}`)
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: DELETE_ATTENDANCE_INFO,
                payload: res.data,
            })
        })
}

export const updateAttendanceInfo = (attendanceid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/attendance/${attendanceid}`, [data])
        .then((res) => {
            dispatch({
                type: UPDATE_ATTENDANCE_INFO,
                payload: res.data,
            })
        })
}

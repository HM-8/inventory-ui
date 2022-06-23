import axios from 'axios'

export const GET_NOTIFICATION = 'GET_NOTIFICATION'
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION'
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'
export const DELETE_ALL_NOTIFICATION = 'DELETE_ALL_NOTIFICATION'

const role = window.localStorage.getItem('userRole')

export const getNotification = () => (dispatch) => {
    axios.get('http://localhost:4040/v1/notification', {params: {role: role}}).then((res) => {
        console.log("notifications")
        dispatch({
            type: GET_NOTIFICATION,
            payload: res.data,
        })
    })
}

export const deleteNotification = (id) => (dispatch) => {
    axios.post('/v1/notification/delete', { id }).then((res) => {
        dispatch({
            type: DELETE_NOTIFICATION,
            payload: res.data,
        })
    })
}

export const deleteAllNotification = () => (dispatch) => {
    axios.post('http://localhost:4040/v1/notification', {params: {role: role}}).then((res) => {
        dispatch({
            type: DELETE_ALL_NOTIFICATION,
            payload: res.data,
        })
    })
}

export const createNotification = (notification) => (dispatch) => {
    axios.post('/v1/notification/add', { notification }).then((res) => {
        dispatch({
            type: CREATE_NOTIFICATION,
            payload: res.data,
        })
    })
}

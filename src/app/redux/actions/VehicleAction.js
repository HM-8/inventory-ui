import axios from 'axios'

export const GET_VEHICLE_INFO = 'GET_VEHICLE_LIST'
export const GET_ALL_VEHICLE_INFO = 'GET_ALL_VEHICLE_INFO'
export const ADD_VEHICLE_INFO = 'ADD_VEHICLE_INFO'
export const UPDATE_VEHICLE_INFO = 'UPDATE_VEHICLE_INFO'
export const DELETE_VEHICLE_INFO = 'DELETE_VEHICLE_INFO'
export const GET_ASSIGNMENT_INFO = 'GET_ASSIGNMENT_LIST'
export const GET_ALL_ASSIGNMENT_INFO = 'GET_ALL_ASSIGNMENT_INFO'
export const ADD_ASSIGNMENT_INFO = 'ADD_ASSIGNMENT_INFO'
export const UPDATE_ASSIGNMENT_INFO = 'UPDATE_ASSIGNMENT_INFO'
export const DELETE_ASSIGNMENT_INFO = 'DELETE_ASSIGNMENT_INFO'

const accessToken = window.localStorage.getItem('accessToken')
const AuthStr = `Bearer ${accessToken}`

export const getVehicleInfo = (vehicleid) => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/vehicle/${vehicleid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_VEHICLE_INFO,
                payload: res.data,
            })
        })
}

export const getallVehicles = () => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/vehicle`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_ALL_VEHICLE_INFO,
                payload: res.data,
            })
        })
}

export const addVehicleInfo = (data) => (dispatch) => {
    axios
        .post('http://localhost:4040/v1/vehicle', data)
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ADD_VEHICLE_INFO,
                payload: res.data,
            })
        })
}

export const deleteVehicleInfo = (vehicleid) => (dispatch) => {
    axios.delete(`http://localhost:4040/v1/vehicle/${vehicleid}`).then((res) => {
        console.log(res.data)
        dispatch({
            type: DELETE_VEHICLE_INFO,
            payload: res.data,
        })
    })
}

export const updateVehicleInfo = (vehicleid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/vehicle/${vehicleid}`, data)
        .then((res) => {
            dispatch({
                type: UPDATE_VEHICLE_INFO,
                payload: res.data,
            })
        })
}

export const getAssignmentInfo = (assignmentid) => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/assignment/${assignmentid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_ASSIGNMENT_INFO,
                payload: res.data,
            })
        })
}

export const getallAssignments = () => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/assignment`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_ALL_ASSIGNMENT_INFO,
                payload: res.data,
            })
        })
}

export const addAssignmentInfo = (data) => (dispatch) => {
    axios
        .post('http://localhost:4040/v1/assignment', data)
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ADD_ASSIGNMENT_INFO,
                payload: res.data,
            })
        })
}

export const deleteAssignmentInfo = (assignmentid) => (dispatch) => {
    axios.delete(`http://localhost:4040/v1/assignment/${assignmentid}`).then((res) => {
        console.log(res.data)
        dispatch({
            type: DELETE_ASSIGNMENT_INFO,
            payload: res.data,
        })
    })
}

export const updateAssignmentInfo = (assignmentid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/assignment/${assignmentid}`, data)
        .then((res) => {
            dispatch({
                type: UPDATE_ASSIGNMENT_INFO,
                payload: res.data,
            })
        })
}

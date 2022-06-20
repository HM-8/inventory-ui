import axios from 'axios'

export const GET_DEPARTMENT_INFO = 'GET_DEPARTMENT_INFO'
export const GET_ALL_DEPARTMENT_INFO = 'GET_ALL_DEPARTMENT_INFO'
export const ADD_DEPARTMENT_INFO = 'ADD_DEPARTMENT_INFO'
export const UPDATE_DEPARTMENT_INFO = 'UPDATE_DEPARTMENT_INFO'
export const DELETE_DEPARTMENT_INFO = 'DELETE_DEPARTMENT_INFO'

const accessToken = window.localStorage.getItem('accessToken')
const AuthStr = `Bearer ${accessToken}`

export const getDepartmentInfo = (departmentid) => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/department/${departmentid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_DEPARTMENT_INFO,
                payload: res.data,
            })
        })
}

export const getallDepartments = () => (dispatch) => {
    axios
        .get('http://localhost:4040/v1/department', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_ALL_DEPARTMENT_INFO,
                payload: res.data,
            })
        }).catch((error) => {
            console.log('error', error)
        })
}

export const addDepartmentInfo = (data) => (dispatch) => {
    // var departments = {};
    
    // departments = data.map((item) => {
    //     console.log('item', item)
    //     const container = {
    //         name: item.name,
    //         head: item.head,
    //         description: item.description
    //     }

    //     return container
    // })
    // console.log("fixed dep", departments);

    axios.post('http://localhost:4040/v1/department', { data }).then((res) => {
        console.log(res.data)
        dispatch({
            type: ADD_DEPARTMENT_INFO,
            payload: res.data,
        })
    })
}

export const deleteDepartmentInfo = (departmentid) => (dispatch) => {
    axios
        .delete(`http://localhost:4040/v1/department/${departmentid}`)
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: DELETE_DEPARTMENT_INFO,
                payload: res.data,
            })
        })
}

export const updateDepartmentInfo = (departmentid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/department/${departmentid}`, { data })
        .then((res) => {
            dispatch({
                type: UPDATE_DEPARTMENT_INFO,
                payload: res.data,
            })
        })
}

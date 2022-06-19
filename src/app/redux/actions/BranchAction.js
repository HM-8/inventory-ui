import axios from 'axios'

export const GET_BRANCH_INFO = 'GET_BRANCH_INFO'
export const GET_ALL_BRANCH_INFO = 'GET_ALL_BRANCH_INFO'
export const ADD_BRANCH_INFO = 'ADD_BRANCH_INFO'
export const UPDATE_BRANCH_INFO = 'UPDATE_BRANCH_INFO'
export const DELETE_BRANCH_INFO = 'DELETE_BRANCH_INFO'

const accessToken = window.localStorage.getItem('accessToken')
const AuthStr = `Bearer ${accessToken}`; 

export const getCompanyInfo = (branchid) => (dispatch) => {
    axios.get(
        `http://localhost:4040/v1/branch/${branchid}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': AuthStr
            }
        }
    ).then((res) => {
        dispatch({
            type: GET_BRANCH_INFO,
            payload: res.data,
        })
    })
}

export const getallBranches = () => (dispatch) => {
    axios.get(
        `http://localhost:4040/v1/branch`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': AuthStr
            }
        }
    ).then((res) => {
        dispatch({
            type: GET_ALL_BRANCH_INFO,
            payload: res.data,
        })
    })
}

export const addCompanyInfo = (data) => (dispatch) => {
    axios.post('http://localhost:4040/v1/branch', {data}).then((res) => {
        console.log(res.data)
        dispatch({
            type: ADD_BRANCH_INFO,
            payload: res.data,
        })
    })
}

export const deleteBranchInfo = (branchid) => (dispatch) => {
    axios.delete(`http://localhost:4040/v1/branch/${branchid}`).then((res) => {
        console.log(res.data)
        dispatch({
            type: DELETE_BRANCH_INFO,
            payload: res.data,
        })
    })
}

export const updateCompanyInfo = (branchid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/branch/${branchid}`, { data })
        .then((res) => {
            dispatch({
                type: UPDATE_BRANCH_INFO,
                payload: res.data,
            })
        })
}

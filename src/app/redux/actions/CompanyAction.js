import axios from 'axios'

export const GET_COMPANY_INFO = 'GET_COMPANY_INFO'
export const ADD_COMPANY_INFO = 'ADD_COMPANY_INFO'
export const UPDATE_COMPANY_INFO = 'UPDATE_COMPANY_INFO'

const accessToken = window.localStorage.getItem('accessToken')
const AuthStr = `Bearer ${accessToken}`; 

export const getCompanyInfo = () => (dispatch) => {
    const companyid="62adcb6e495011c76f401a1e";
    axios.get(
        `http://localhost:4040/v1/company/${companyid}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': AuthStr
            }
        }
    ).then((res) => {
        dispatch({
            type: GET_COMPANY_INFO,
            payload: res.data,
        })
    })
}

export const addCompanyInfo = (companyid) => (dispatch) => {
    axios.post('http://localhost:4040/v1/company/', { companyid }).then((res) => {
        console.log(res.data)
        dispatch({
            type: ADD_COMPANY_INFO,
            payload: res.data,
        })
    })
}


export const updateCompanyInfo = (companyid, amount) => (dispatch) => {
    console.log(companyid, amount)
    axios
        .post('http://localhost:4040/v1/company', { companyid, amount })
        .then((res) => {
            dispatch({
                type: UPDATE_COMPANY_INFO,
                payload: res.data,
            })
        })
}

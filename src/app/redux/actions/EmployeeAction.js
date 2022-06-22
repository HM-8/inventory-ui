import axios from 'axios'

export const GET_EMPLOYEE_INFO = 'GET_EMPLOYEE_INFO'
export const GET_ALL_EMPLOYEE_INFO = 'GET_ALL_EMPLOYEE_INFO'
export const ADD_EMPLOYEE_INFO = 'ADD_EMPLOYEE_INFO'
export const UPDATE_EMPLOYEE_INFO = 'UPDATE_EMPLOYEE_INFO'
export const DELETE_EMPLOYEE_INFO = 'DELETE_EMPLOYEE_INFO'

export const GET_QUALIFICATION_INFO = 'GET_QUALIFICATION_INFO'
export const GET_ALL_QUALIFICATION_INFO = 'GET_ALL_QUALIFICATION_INFO'
export const ADD_INSURANCE_INFO = 'ADD_INSURANCE_INFO'
export const DELETE_INSURANCE_INFO = 'DELETE_INSURANCE_INFO'
export const UPDATE_INSURANCE_INFO = 'UPDATE_INSURANCE_INFO'


export const GET_INSURANCE_INFO = 'GET_INSURANCE_INFO'
export const GET_ALL_INSURANCE_INFO = 'GET_ALL_INSURANCE_INFO'
export const ADD_QUALIFICATION_INFO = 'ADD_QUALIFICATION_INFO'
export const DELETE_QUALIFICATION_INFO = 'DELETE_QUALIFICATION_INFO'
export const UPDATE_QUALIFICATION_INFO = 'UPDATE_QUALIFICATION_INFO'


export const GET_SALARY_INFO = 'GET_SALARY_INFO'
export const GET_ALL_SALARY_INFO = 'GET_ALL_SALARY_INFO'
export const ADD_SALARY_INFO = 'ADD_SALARY_INFO'
export const DELETE_SALARY_INFO = 'DELETE_SALARY_INFO'
export const UPDATE_SALARY_INFO = 'UPDATE_SALARY_INFO'

export const GET_WORK_INFO = 'GET_WORK_INFO'
export const GET_ALL_WORK_INFO = 'GET_ALL_WORK_INFO'
export const ADD_WORK_INFO = 'ADD_WORK_INFO'
export const DELETE_WORK_INFO = 'DELETE_WORK_INFO'
export const UPDATE_WORK_INFO = 'UPDATE_WORK_INFO'

const accessToken = window.localStorage.getItem('accessToken')
const AuthStr = `Bearer ${accessToken}`

export const getEmployee = (employeeid) => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/employee/${employeeid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_EMPLOYEE_INFO,
                payload: res.data,
            })
        })
}

export const getallEmployees = () => (dispatch) => {

    console.log("callled hereerere")
    axios
        .get(`http://localhost:4040/v1/employee`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            console.log({ res })
            dispatch({
                type: GET_ALL_EMPLOYEE_INFO,
                payload: res.data,
            })
        })
}

export const addEmployeeInfo = (data) => (dispatch) => {
    axios
        .post('http://localhost:4040/v1/employee', {
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            gender: data.gender,
            designation: data.designation,
            department: data.department,
            branch: data.branch,
            email: {
                personal: data.pemail,
                office: data.oemail
            },
            telephone: {
                home: data.hometel,
                mobile: data.mobiletel,
            },
            location: {
                city: data.city,
                subCity: data.subcity,
                wereda: data.wereda,
                kebele: data.kebele,
                houseNo: data.houseno,
            },
            dob: data.dob,
            doj: data.doj,
            cv: data.cv,
        })
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ADD_EMPLOYEE_INFO,
                payload: res.data,
            })
        })
}

export const deleteEmployeeInfo = (employeeid) => (dispatch) => {
    axios.delete(`http://localhost:4040/v1/employee/${employeeid}`).then((res) => {
        console.log(res.data)
        dispatch({
            type: DELETE_EMPLOYEE_INFO,
            payload: res.data,
        })
    })
}

export const updateEmployeeInfo = (employeeid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/employee/${employeeid}`, { data })
        .then((res) => {
            dispatch({
                type: UPDATE_EMPLOYEE_INFO,
                payload: res.data,
            })
        })
}

//Qulaification

export const getQualification = (qualificationid) => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/qualification/${qualificationid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_QUALIFICATION_INFO,
                payload: res.data,
            })
        })
}

export const getallQualification = () => (dispatch) => {

    console.log("callled hereerere")
    axios
        .get(`http://localhost:4040/v1/qualification`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            console.log({ res })
            dispatch({
                type: GET_ALL_QUALIFICATION_INFO,
                payload: res.data,
            })
            // console.log("gvhf",res.data)
        })
}

export const addQualificationInfo = (data) => (dispatch) => {
    axios
        .post('http://localhost:4040/v1/qualification', {
            employee: data.employeeid,
            schoolName: data.schoolName,
            degreeType: data.degreeType,
            yearStarted: data.yearStarted,
            yearCompleted: data.yearCompleted,
            certification: data.certification,
        })
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ADD_QUALIFICATION_INFO,
                payload: res.data,
            })
        })
}

export const deleteQualificationInfo = (qualificationid) => (dispatch) => {
    axios.delete(`http://localhost:4040/v1/qualification/${qualificationid}`).then((res) => {
        console.log(res.data)
        dispatch({
            type: DELETE_QUALIFICATION_INFO,
            payload: res.data,
        })
    })
}

export const updateQualificationInfo = (qualificationid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/qualification/${qualificationid}`, { data })
        .then((res) => {
            dispatch({
                type: UPDATE_QUALIFICATION_INFO,
                payload: res.data,
            })
        })
}

//Insurance 
export const getInsurance = (insuranceid) => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/insurance/${insuranceid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_INSURANCE_INFO,
                payload: res.data,
            })
        })
}

export const getallInsurance= () => (dispatch) => {

    console.log("callled hereerere")
    axios
        .get(`http://localhost:4040/v1/insurance`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            console.log({ res })
            dispatch({
                type: GET_ALL_INSURANCE_INFO,
                payload: res.data,
            })
            // console.log("gvhf",res.data)
        })
}

export const addInsuranceInfo = (data) => (dispatch) => {
    axios
        .post('http://localhost:4040/v1/insurance', {
            employee: data.employeeid,    
            insuranceType: data.insuranceType,
            insuranceProvider: data.insuranceprovider,
            agentName: data.agentName,
            agentPhonenumber: data.agentPhonenumber,
            insuranceDocument: data.insuranceDocument,
        })
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ADD_INSURANCE_INFO,
                payload: res.data,
            })
        })
}

export const deleteInsuranceInfo = (insuranceid) => (dispatch) => {
    axios.delete(`http://localhost:4040/v1/insurance/${insuranceid}`).then((res) => {
        console.log(res.data)
        dispatch({
            type: DELETE_INSURANCE_INFO,
            payload: res.data,
        })
    })
}

export const updateInsuranceInfo = (insuranceid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/insurance/${insuranceid}`, { data })
        .then((res) => {
            dispatch({
                type: UPDATE_INSURANCE_INFO,
                payload: res.data,
            })
        })
}


//Salary
export const getSalary = (salaryid) => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/salary/${salaryid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_SALARY_INFO,
                payload: res.data,
            })
        })
}

export const getallSalary= () => (dispatch) => {

    console.log("callled hereerere")
    axios
        .get(`http://localhost:4040/v1/salary`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            console.log({ res })
            dispatch({
                type: GET_ALL_SALARY_INFO,
                payload: res.data,
            })
            // console.log("gvhf",res.data)
        })
}

export const addSalaryInfo = (data) => (dispatch) => {
    axios
        .post('http://localhost:4040/v1/salary', {
            employee: data.employeeid,    
            paymentMode: data.payment_mode,
            bank: {
                name:data.bname,
                accountName:data.bAccountName,
                accountNumber:data.baccountNumber,
              },
              salary: data.salary,
              allowance: {
                type:data.atype,
                amount:data.aamount ,
              },
        })
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ADD_SALARY_INFO,
                payload: res.data,
            })
        })
}

export const deleteSalaryInfo = (salaryid) => (dispatch) => {
    axios.delete(`http://localhost:4040/v1/salary/${salaryid}`).then((res) => {
        console.log(res.data)
        dispatch({
            type: DELETE_SALARY_INFO,
            payload: res.data,
        })
    })
}

export const updateSalaryInfo = (salaryid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/salary/${salaryid}`, { data })
        .then((res) => {
            dispatch({
                type: UPDATE_SALARY_INFO,
                payload: res.data,
            })
        })
}


//Work
export const getWork = (workid) => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/work/${workid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_WORK_INFO,
                payload: res.data,
            })
        })
}

export const getallWork= () => (dispatch) => {

    console.log("callled hereerere")
    axios
        .get(`http://localhost:4040/v1/work`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            console.log({ res })
            dispatch({
                type: GET_ALL_WORK_INFO,
                payload: res.data,
            })
            // console.log("gvhf",res.data)
        })
}

export const addWorkInfo = (data) => (dispatch) => {
    axios
        .post('http://localhost:4040/v1/work', {
            employee: data.companyName,
            companyName: data.companyWebsite,
            companyWebsite: data.companyEmail,
            companyEmail: data.personalEmail,
            personalEmail: data.personalEmail,
            previousDesignation: data.previousDesignation,
        })
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ADD_WORK_INFO,
                payload: res.data,
            })
        })
}

export const deleteWorkInfo = (workid) => (dispatch) => {
    axios.delete(`http://localhost:4040/v1/work/${workid}`).then((res) => {
        console.log(res.data)
        dispatch({
            type: DELETE_WORK_INFO,
            payload: res.data,
        })
    })
}

export const updateWorkInfo = (workid, data) => (dispatch) => {
    axios
        .patch(`http://localhost:4040/v1/work/${workid}`, { data })
        .then((res) => {
            dispatch({
                type: UPDATE_WORK_INFO,
                payload: res.data,
            })
        })
}
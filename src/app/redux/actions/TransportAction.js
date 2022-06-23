import axios from 'axios'

export const GET_TRANSPORT_INFO = 'GET_TRANSPORT_INFO'
export const GET_ALL_TRANSPORT_INFO = 'GET_ALL_TRANSPORT_INFO'
export const ADD_TRANSPORT_INFO = 'ADD_TRANSPORT_INFO'
export const UPDATE_TRANSPORT_INFO = 'UPDATE_TRANSPORT_INFO'
export const DELETE_TRANSPORT_INFO = 'DELETE_TRANSPORT_INFO'

const accessToken = window.localStorage.getItem('accessToken')
const AuthStr = `Bearer ${accessToken}`

export const getTransportInfo = () => (dispatch) => {
    axios
        .get(`http://localhost:4040/v1/transport`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_TRANSPORT_INFO,
                payload: res.data,
            })
        })
}

export const getallTransport = () => (dispatch) => {
    axios
        .get('http://localhost:4040/v1/transport', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_ALL_TRANSPORT_INFO,
                payload: res.data,
            })
        }).catch((error) => {
            console.log('error', error)
        })
}

export const addTransportInfo = (data) => (dispatch) => {
    axios
        .post('http://localhost:4040/v1/transport/', {
            
    basic: {
        brand: data.vehicleName,
        model:data.model ,
        bodyColor: data.color,
        regNo: data.registration_num ,
        yearofMan: data.yearManufactured,
        engineNo: data.engine_num,
        chasisNo: data.chassis_num,
        noofcylinders: data.numberOfCylinders ,
        horsepower:data.horsepower ,
        fuelType: data.fuel_type,
        fuelMeasurment: data.fuel_measurment ,
        plateNo: data.plate_num,
        cubicCapacity: data.cubic_capacity,
        usage: data.track_usage,
        carryingCapacity: data.carrying_cap,
      },
      insurance: {
        certificationNo:data.insuranceCertificateNumber ,
        doi:data.dateofIssuance ,
        nameOfInsured: data.nameofInsured,
        nameOfInsurer: data.nameofInsurer ,
        policyNo: data.insurance_Policy_No,
        mobileTel: data.PersonalTel,
        officeTel: data.companyTel,
      },
      fund: {
        fundNo:data.roadFundNo ,
        doi:data.dateofIssuance,
        expiryDate:data.expiryDate,
        receivedFrom: data.recievedFrom,
        mobileTel: data.mobileNo,
        officeTel: data.officeNumber,
        amountNo: data.totAmtRecievedInNum,
        amountWord: data.totAmtRecievedInWords,
      },
      bolo: {
        receiptNo:data.receiptNo ,
        inspectionDate: data.inspectionDate,
        expiryDate: data.expiryDate,
      },
        }, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ADD_TRANSPORT_INFO,
                payload: res.data,
            })
        })
}

export const updateTransportInfo = (transportid, values) => (dispatch) => {
    console.log(values)
    delete values.id
    axios
        .patch(`http://localhost:4040/v1/transport/${transportid}`, values, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: UPDATE_TRANSPORT_INFO,
                payload: res.data,
            })
        })
}


export const deleteTransportInfo = (transportid) => (dispatch) => {
    axios
        .delete(`http://localhost:4040/v1/transport/${transportid}`)
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: DELETE_TRANSPORT_INFO,
                payload: res.data,
            })
        })
}
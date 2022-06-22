import axios from 'axios'

export const GET_VEHICLE_LIST = 'GET_VEHICLE_LIST'
const accessToken = window.localStorage.getItem('accessToken')
const AuthStr = `Bearer ${accessToken}`

export const getVehicleList = () => (dispatch) => {
    axios
        .get('http://localhost:4040/v1/vehicle', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: AuthStr,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_VEHICLE_LIST,
                payload: res.data,
            })
        })
}

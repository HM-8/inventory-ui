import axios from 'axios'

export const GET_VEHICLE_LIST = 'GET_VEHICLE_LIST'

export const getVehicleList = () => (dispatch) => {
    axios.get('http://localhost:4040/v1/Vehicle').then((res) => {
        dispatch({
            type: GET_VEHICLE_LIST,
            payload: res.data,
        })
    })
}
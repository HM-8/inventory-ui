import {
    GET_VEHICLE_LIST,
} from '../actions/VehicleAction'

const initialState = {
    vehicleList: []
}

const VehicleReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLE_LIST: {
            return {
                ...state,
                vehicleList: [...action.payload],
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default VehicleReducer

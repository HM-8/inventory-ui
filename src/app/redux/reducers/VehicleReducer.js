import {
    GET_VEHICLE_INFO,
    GET_ALL_VEHICLE_INFO,
    ADD_VEHICLE_INFO,
    UPDATE_VEHICLE_INFO,
    DELETE_VEHICLE_INFO,
    GET_ASSIGNMENT_INFO,
    GET_ALL_ASSIGNMENT_INFO,
    ADD_ASSIGNMENT_INFO,
    UPDATE_ASSIGNMENT_INFO,
    DELETE_ASSIGNMENT_INFO,

} from '../actions/VehicleAction'

const initialState = {
    vehicle: [],
    vehicles: [],
    assignment: [],
    assignments: []
}

const VehicleReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLE_INFO: {
            return {
                ...state,
                vehicle: action.payload,
            }
        }
        case GET_ALL_VEHICLE_INFO: {
            return {
                ...state,
                vehicles: action.payload,
            }
        }
        case ADD_VEHICLE_INFO: {
            return {
                ...state,
                vehicle: action.payload,
            }
        }
        case UPDATE_VEHICLE_INFO: {
            return {
                ...state,
                vehicle: action.payload,
            }
        }
        case DELETE_VEHICLE_INFO: {
            return {
                ...state,
                vehicle: action.payload,
            }
        }
        case GET_ASSIGNMENT_INFO: {
            return {
                ...state,
                assignment: action.payload,
            }
        }
        case GET_ALL_ASSIGNMENT_INFO: {
            return {
                ...state,
                assignments: action.payload,
            }
        }
        case ADD_ASSIGNMENT_INFO: {
            return {
                ...state,
                assignment: action.payload,
            }
        }
        case UPDATE_ASSIGNMENT_INFO: {
            return {
                ...state,
                assignment: action.payload,
            }
        }
        case DELETE_ASSIGNMENT_INFO: {
            return {
                ...state,
                assignment: action.payload,
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

import {
    GET_ALL_ATTENDANCE_INFO,
    GET_ATTENDANCE_INFO,
    ADD_ATTENDANCE_INFO,
    UPDATE_ATTENDANCE_INFO,
    DELETE_ATTENDANCE_INFO
} from '../actions/AttendanceAction'

const initialState = {
    attendance:[],
    attendances:[]
}

const AttendanceReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_ATTENDANCE_INFO: {
            return {
                ...state,
                attendance: action.payload,
            }
        }
        case GET_ALL_ATTENDANCE_INFO: {
            return {
                ...state,
                attendances: action.payload,
            }
        }
        case ADD_ATTENDANCE_INFO: {
            return {
                ...state,
                attendance: action.payload,
            }
        }
        case UPDATE_ATTENDANCE_INFO: {
            return {
                ...state,
                attendance: action.payload,
            }
        }
        case DELETE_ATTENDANCE_INFO: {
            return {
                ...state,
                attendance: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default AttendanceReducer

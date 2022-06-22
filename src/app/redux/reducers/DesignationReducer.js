import {
    GET_ALL_DESIGNATION_INFO,
    GET_DESIGNATION_INFO,
    ADD_DESIGNATION_INFO,
    UPDATE_DESIGNATION_INFO,
    DELETE_DESIGNATION_INFO
} from '../actions/DesignationAction'

const initialState = {
    designation:[],
    designations:[]
}

const DesignationReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_DESIGNATION_INFO: {
            return {
                ...state,
                designation: action.payload,
            }
        }
        case GET_ALL_DESIGNATION_INFO: {
            return {
                ...state,
                designations: action.payload,
            }
        }
        case ADD_DESIGNATION_INFO: {
            return {
                ...state,
                designation: action.payload,
            }
        }
        case UPDATE_DESIGNATION_INFO: {
            return {
                ...state,
                designation: action.payload,
            }
        }
        case DELETE_DESIGNATION_INFO: {
            return {
                ...state,
                designation: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default DesignationReducer

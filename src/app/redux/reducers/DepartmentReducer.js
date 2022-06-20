import {
    GET_ALL_DEPARTMENT_INFO,
    GET_DEPARTMENT_INFO,
    ADD_DEPARTMENT_INFO,
    UPDATE_DEPARTMENT_INFO,
    DELETE_DEPARTMENT_INFO
} from '../actions/DepartmentAction'

const initialState = {
    department:[],
    departments:[]
}

const DepartmentReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_DEPARTMENT_INFO: {
            return {
                ...state,
                department: action.payload,
            }
        }
        case GET_ALL_DEPARTMENT_INFO: {
            return {
                ...state,
                departments: action.payload,
            }
        }
        case ADD_DEPARTMENT_INFO: {
            return {
                ...state,
                departments: action.payload,
            }
        }
        case UPDATE_DEPARTMENT_INFO: {
            return {
                ...state,
                department: action.payload,
            }
        }
        case DELETE_DEPARTMENT_INFO: {
            return {
                ...state,
                department: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default DepartmentReducer

import {
    GET_EMPLOYEE_INFO,
    GET_ALL_EMPLOYEE_INFO,
    ADD_EMPLOYEE_INFO,
    UPDATE_EMPLOYEE_INFO,
    DELETE_EMPLOYEE_INFO,

    GET_QUALIFICATION_INFO,
    GET_ALL_QUALIFICATION_INFO,
    ADD_INSURANCE_INFO,
    DELETE_INSURANCE_INFO,
    UPDATE_INSURANCE_INFO,

    GET_INSURANCE_INFO,
    GET_ALL_INSURANCE_INFO,
    ADD_QUALIFICATION_INFO,
    DELETE_QUALIFICATION_INFO,
    UPDATE_QUALIFICATION_INFO,

    GET_SALARY_INFO,
    GET_ALL_SALARY_INFO,
    ADD_SALARY_INFO,
    DELETE_SALARY_INFO,
    UPDATE_SALARY_INFO,

    GET_WORK_INFO,
    GET_ALL_WORK_INFO,
    ADD_WORK_INFO,
    DELETE_WORK_INFO,
    UPDATE_WORK_INFO,

} from '../actions/EmployeeAction'

const initialState = {
    employeeInfo:[],
    insuranceInfo:[],
    qualifiactionInfo:[],
    salaryInfo:[],
    workInfo:[],
}

const EmployeeReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_EMPLOYEE_INFO: {
            return {
                ...state,
                employeeInfo: action.payload,
            }
        }
        case GET_ALL_EMPLOYEE_INFO: {
            return {
                ...state,
                employeeInfo: action.payload,
            }
        }
        case ADD_EMPLOYEE_INFO: {
            return {
                ...state,
                employeeInfo: action.payload,
            }
        }
        case UPDATE_EMPLOYEE_INFO: {
            return {
                ...state,
                employeeInfo: action.payload,
            }
        }
        case DELETE_EMPLOYEE_INFO: {
            return {
                ...state,
                employeeInfo: action.payload,
            }
        }
       
       
        case GET_QUALIFICATION_INFO: {
            return {
                ...state,
                insuranceInfo: action.payload,
            }
        }
        case GET_ALL_QUALIFICATION_INFO: {
            return {
                ...state,
                insuranceInfo: action.payload,
            }
        }
        case ADD_INSURANCE_INFO: {
            return {
                ...state,
                insuranceInfo: action.payload,
            }
        }
        case DELETE_INSURANCE_INFO: {
            return {
                ...state,
                insuranceInfo: action.payload,
            }
        }
        case UPDATE_INSURANCE_INFO: {
            return {
                ...state,
                insuranceInfo: action.payload,
            }
        }

        
        case GET_INSURANCE_INFO: {
            return {
                ...state,
                qualifiactionInfo: action.payload,
            }
        }
        case GET_ALL_INSURANCE_INFO: {
            return {
                ...state,
                qualifiactionInfo: action.payload,
            }
        }
        case ADD_QUALIFICATION_INFO: {
            return {
                ...state,
                qualifiactionInfo: action.payload,
            }
        }
        case DELETE_QUALIFICATION_INFO: {
            return {
                ...state,
                qualifiactionInfo: action.payload,
            }
        }
        case UPDATE_QUALIFICATION_INFO: {
            return {
                ...state,
                qualifiactionInfo: action.payload,
            }
        }



        
        case GET_SALARY_INFO: {
            return {
                ...state,
                salaryInfo: action.payload,
            }
        }
        case GET_ALL_SALARY_INFO: {
            return {
                ...state,
                salaryInfo: action.payload,
            }
        }
        case ADD_SALARY_INFO: {
            return {
                ...state,
                salaryInfo: action.payload,
            }
        }
        case DELETE_SALARY_INFO: {
            return {
                ...state,
                salaryInfo: action.payload,
            }
        }
        case UPDATE_SALARY_INFO: {
            return {
                ...state,
                salaryInfo: action.payload,
            }
        }




        
        case GET_WORK_INFO: {
            return {
                ...state,
                workInfo: action.payload,
            }
        }
        case GET_ALL_WORK_INFO: {
            return {
                ...state,
                workInfo: action.payload,
            }
        }
        case ADD_WORK_INFO: {
            return {
                ...state,
                workInfo: action.payload,
            }
        }
        case DELETE_WORK_INFO: {
            return {
                ...state,
                workInfo: action.payload,
            }
        }
        case UPDATE_WORK_INFO: {
            return {
                ...state,
                workInfo: action.payload,
            }
        }

        // case ADD_PRODUCT_TO_CART: {
        //     return {
        //         ...state,
        //         cartList: [...action.payload],
        //     }
        // }
        // case DELETE_PRODUCT_FROM_CART: {
        //     return {
        //         ...state,
        //         cartList: [...action.payload],
        //     }
        // }
        // case UPDATE_CART_AMOUNT: {
        //     return {
        //         ...state,
        //         cartList: [...action.payload],
        //     }
        // }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default EmployeeReducer

import {
    GET_COMPANY_INFO,
} from '../actions/CompanyAction.js'

const initialState = {
    companyInfo:[]
}

const CompanyReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COMPANY_INFO: {
            return {
                ...state,
                companyInfo: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default CompanyReducer

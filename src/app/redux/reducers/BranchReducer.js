import {
    GET_ALL_BRANCH_INFO,
    GET_BRANCH_INFO,
    ADD_BRANCH_INFO,
    UPDATE_BRANCH_INFO,
    DELETE_BRANCH_INFO
} from '../actions/BranchAction'

const initialState = {
    branch:[],
    branches:[]
}

const BranchReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_BRANCH_INFO: {
            return {
                ...state,
                branch: action.payload,
            }
        }
        case GET_ALL_BRANCH_INFO: {
            return {
                ...state,
                branches: action.payload,
            }
        }
        case ADD_BRANCH_INFO: {
            return {
                ...state,
                branch: action.payload,
            }
        }
        case UPDATE_BRANCH_INFO: {
            return {
                ...state,
                branch: action.payload,
            }
        }
        case DELETE_BRANCH_INFO: {
            return {
                ...state,
                branch: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default BranchReducer

import {
    GET_TRANSPORT_INFO,
    GET_ALL_TRANSPORT_INFO,
    ADD_TRANSPORT_INFO,
    UPDATE_TRANSPORT_INFO,
    DELETE_TRANSPORT_INFO
} from '../actions/TransportAction'

const initialState = {
    transportInfo:[],
    // departments:[]
}

const TransportReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_TRANSPORT_INFO: {
            return {
                ...state,
                transportInfo: action.payload,
            }
        }
        case GET_ALL_TRANSPORT_INFO: {
            return {
                ...state,
                transportInfo: action.payload,
            }
        }
        case ADD_TRANSPORT_INFO: {
            return {
                ...state,
                transportInfo: action.payload,
            }
        }
        case UPDATE_TRANSPORT_INFO: {
            return {
                ...state,
                transportInfo: action.payload,
            }
        }
        case DELETE_TRANSPORT_INFO: {
            return {
                ...state,
                transportInfo: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default TransportReducer

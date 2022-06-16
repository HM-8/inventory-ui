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
    //     case GET_CATEGORY_LIST: {
    //         return {
    //             ...state,
    //             categoryList: [...action.payload],
    //         }
    //     }
    //     case GET_RATING_LIST: {
    //         return {
    //             ...state,
    //             ratingList: [...action.payload],
    //         }
    //     }
    //     case GET_BRAND_LIST: {
    //         return {
    //             ...state,
    //             brandList: [...action.payload],
    //         }
    //     }
    //     case GET_CART_LIST: {
    //         return {
    //             ...state,
    //             cartList: [...action.payload],
    //         }
    //     }
    //     case ADD_PRODUCT_TO_CART: {
    //         return {
    //             ...state,
    //             cartList: [...action.payload],
    //         }
    //     }
    //     case DELETE_PRODUCT_FROM_CART: {
    //         return {
    //             ...state,
    //             cartList: [...action.payload],
    //         }
    //     }
    //     case UPDATE_CART_AMOUNT: {
    //         return {
    //             ...state,
    //             cartList: [...action.payload],
    //         }
    //     }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default VehicleReducer

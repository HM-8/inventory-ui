import axios from 'axios'

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST'
export const GET_CART_LIST = 'GET_CART_LIST'
export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST'
export const GET_RATING_LIST = 'GET_RATING_LIST'
export const GET_BRAND_LIST = 'GET_BRAND_LIST'

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART'

export const UPDATE_CART_AMOUNT = 'UPDATE_CART_AMOUNT'

export const getCompanyInfo = () => (dispatch) => {
    axios.get('http://localhost:4040/v1/company').then((res) => {
        dispatch({
            type: GET_PRODUCT_LIST,
            payload: res.data,
        })
    })
}

export const addCompanyInfo = (uid, productId) => (dispatch) => {
    axios.post('/api/ecommerce/add-to-cart', { uid, productId }).then((res) => {
        console.log(res.data)
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: res.data,
        })
    })
}

// export const deleteProductFromCart = (uid, productId) => (dispatch) => {
//     axios
//         .post('/api/ecommerce/delete-from-cart', { uid, productId })
//         .then((res) => {
//             dispatch({
//                 type: DELETE_PRODUCT_FROM_CART,
//                 payload: res.data,
//             })
//         })
// }

export const updateCompanyInfo = (uid, productId, amount) => (dispatch) => {
    console.log(uid, productId, amount)
    axios
        .post('/api/ecommerce/update-cart-amount', { uid, productId, amount })
        .then((res) => {
            dispatch({
                type: UPDATE_CART_AMOUNT,
                payload: res.data,
            })
        })
}

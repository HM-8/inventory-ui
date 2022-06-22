import { navigations } from 'app/navigations'
import { SET_USER_NAVIGATION } from '../actions/NavigationAction'

const initialState = [...navigations]
// delete navigations[0];
// console.log("naviiiigationasfg",navigations);

const NavigationReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAVIGATION: {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default NavigationReducer

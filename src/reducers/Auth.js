import {LOGIN } from '../actions/types';
const initialState = {
    loggedIn: false,
    user: null
}
export default (state=initialState,action) => {
    switch(action.type) {
        case LOGIN: {
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            }
        }
        default: return state
    }
}
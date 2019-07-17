import { SELECT_LOGIN, SELECT_SIGNUP } from './ActionTypes';

// Return the login action
export const selectLogin = (value) => {
    return {
        type: SELECT_LOGIN,
        payload: value
    }
}

// Return the signup action
export const selectSignup = (value) => {
    return {
        type: SELECT_SIGNUP,
        payload: value
    }
}
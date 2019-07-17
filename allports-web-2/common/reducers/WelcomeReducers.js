import {
    SELECT_LOGIN,
    SELECT_SIGNUP
} from '../actions/ActionTypes';

// Always provide a default empty state, and pass an action
// Usually, we create a new state with Object.assign and return it
// Here, we simply return the data the state needs to be updated with
// authInfo is just given a slice of the state to manage - reducer composition
// The intial state represents the empty state of the slice
// Thus, the state parameter is different for every reducer, and corresponds
// to the part of the state it manages
// So, authInfo is a subsection of the state
export const authInfo = (state = SELECT_LOGIN, action) => {
    switch (action.type) {
        case SELECT_LOGIN:
            return action.loginForm;
        case SELECT_SIGNUP:
            return action.onboardingInfo;
    }
}
import selectAuth from './WelcomeFormReducers';
import { combineReducers } from 'redux';

// Each reducer corresponds to a slice of the state
const rootReducer = combineReducers({

    // Equivalent to returning authInfo: authInfo(state.authInfo, action)
    selectAuth
});

export default rootReducer;
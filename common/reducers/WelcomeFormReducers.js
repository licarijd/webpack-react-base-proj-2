import { SELECT_LOGIN } from '../actions/WelcomeActions'

const initialState = {
  login: false
}

const selectAuth = (state = initialState, action) => {
 
    switch (action.type) {
        case SELECT_LOGIN: {
            return { login: true }
        }
        default:
            return state
    }
}

export default selectAuth;
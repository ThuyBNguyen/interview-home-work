import { FETCH_USERS, SIGNIN, SIGNUP, SIGNOUT } from '../actions/actionTypes';
import users from '../data/users.json'

const INITIAL_STATE = {
    users: users,
    isLoggedIn : false,
    currentUser: null,
    loginError: null,
}

export default (state = INITIAL_STATE, action ) => {
    let username, password
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                // users: action.payload,
            }
        case SIGNIN:
            ({ username, password } = action.payload)
            let user = state.users.find(user => user.username === username)
            if (!user) {
                return {
                    ...state,
                    isLoggedIn: false,
                    currentUser: null,
                    loginError: 'user not found',
                }
            } else if (user.password !== password) {
                return {
                    ...state,
                    isLoggedIn: false,
                    currentUser: null,
                    loginError: 'wrong password',
                }
            } else {
                return {
                    ...state,
                    isLoggedIn: true,
                    currentUser: user,
                    loginError: null,
                }
            }
        case SIGNUP :
            ({ username } = action.payload)
            if (state.users.find(user => user.username === username)) {
                return {
                    ...state,
                    isLoggedIn: false,
                    currentUser: null,
                    loginError: 'user already exists',
                }
            } else {
                return {
                    ...state,
                    users: [...state.users, action.payload]
                }
            }
        case SIGNOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                loginError: null,
            }
        default:
            return state
    }
}
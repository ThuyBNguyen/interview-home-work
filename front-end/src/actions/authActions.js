import { SIGNIN, SIGNOUT, SIGNUP } from './actionTypes';

export const signin = (username, password) => ({
    type: SIGNIN,
    payload: {
        username,
        password,
    }
})

export const signup = (user) => ({
    type: SIGNUP,
    payload: {
        ...user,
        id: parseInt(Math.random() * 1000000),
    },
})

export const signout = () => ({
    type: SIGNOUT
})
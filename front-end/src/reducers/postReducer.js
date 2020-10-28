import {FETCH_ALL_POSTS, FETCH_POST,CREATE_POST, EDIT_POST ,DELETE_POST} from '../actions/actionTypes';
import posts from '../data/posts.json'

const INITIAL_STATE = posts

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return state
        case FETCH_POST:
            return [ ...state, action.payload ]
        case CREATE_POST:
            return [...state, action.payload]
        case EDIT_POST:
            return state.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post
                }
            })
        case DELETE_POST:
            console.log('DELETE_POST', action.payload, state.filter(post => post.id !== action.payload))
            return state.filter(post => post.id !== action.payload)
        default: 
            return state
    }
}
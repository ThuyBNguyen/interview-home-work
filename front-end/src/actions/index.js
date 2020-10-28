import _ from 'lodash';
import axios from 'axios'
import history from '../history'
import { 
    FETCH_ALL_POSTS,
    FETCH_POST,
    FETCH_ALL_COMMENTS,
    CREATE_POST,
    FETCH_USERS,
    EDIT_POST, 
    DELETE_POST
} from './actionTypes'
import posts from '../data/posts.json'
import comments from '../data/comments.json'
import users from '../data/users.json'
// console.log('users', users)

export const fetchPost = (id) => async (dispatch) => {
    const post = await posts.find(post => post.id === id)
    dispatch({
        type: FETCH_POST,
        payload: post
    })
}

// export const fetchPostAndUser = () => (dispatch, getState) => {
//     dispatch(fetchPost)
//     _.chain(getState().post)
//         .map('owner')
//         .uniq()
//         .forEach(id => dispatch(fetchUsers(id)))
//         .value()
// }

export const fetchPosts = () => async (dispatch) => {
    dispatch({
        type: FETCH_ALL_POSTS,
        payload: posts,
    })
}

export const fetchComments = () => async (dispatch) => {
    dispatch({
        type: FETCH_ALL_COMMENTS,
        payload: comments,
    })
}

export const fetchUsers = () => (dispatch) => {
    dispatch({
        type: FETCH_USERS,
        payload: users,
    })
}

export const fetchPostsAndUsers = () => (dispatch, getState) => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
    dispatch(fetchComments());

    // _.chain(getState().posts)
    //     .map('owner')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUsers(id)))
    //     .value()
}


export const createPost = (formValue) => {
    return async (dispatch, getState) => {
        // const { UserId } = getState().auth
        const post = formValue
        console.log('post', post)

        dispatch({
            type: CREATE_POST,
            payload: {
                ...post,
                id: parseInt(Math.random() * 1000000),
            }
        })
        history.push('/')
    }

    // axios({
    //     url: '/api/save',
    //     method: 'POST',
    //     data: post
    // })
    //     .then(() => {
    //         console.log('Data has been sent to the server')
    //     })
    //     .catch((error) => {
    //         console.log('Internet server error')
    //     });
}

export const editPost = (id, formValue) => {
    return async (dispatch, getState) => {
        const post = formValue

        dispatch({
            type: EDIT_POST,
            payload: {
                ...post,
                id: id,
            }
        })
        history.push('/post/' + id)
    }
}

export const deletePost = (id) => {
    return async (dispatch, getState) => {
        dispatch({
            type: DELETE_POST,
            payload: id
        })
        history.push('/')
    }
}

// const fetchPostsFromServer = () => {
//     axios.get('/api')
//         .then((response) => {
//             const data = response.data
//             console.log('Data recieved!')
//         })
//         .catch((error) => {
//             alert('Error retrieving data')
//         })
// }
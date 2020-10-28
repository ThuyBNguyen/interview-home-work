import {FETCH_ALL_COMMENTS, CREATE_COMMENT} from '../actions/actionTypes';

import comments from '../data/comments.json'

function getCommentsByPost(comments) {
    let commentsByPost = {}
    for (let comment of comments) {
        if (!commentsByPost[comment.id]) commentsByPost[comment.id] = []
        commentsByPost[comment.id].push(comment)
    }
    return commentsByPost
}

const INITIAL_STATE = {
    commentsByPost: getCommentsByPost(comments)
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_COMMENTS :
            return {
                ...state,
                // commentsByPost: getCommentsByPost(action.payload),
            }
        case CREATE_COMMENT:
            return {
                ...state,
                commentsByPost: {
                    ...state.commentsByPost,
                    [action.payload.post]: [
                        ...state.commentsByPost[action.payload.post] || [],
                        action.payload,
                    ],
                }
            }
        default: 
            return state
    }
}
/* global Promise */

import rest from '../rest'
import {sync, async} from './util'

// ACTION TYPES
export const POST_COMMENT_REQUEST = 'POST_COMMENT_REQUEST';
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const FOCUS_COMMENT = 'FOCUS_COMMENT';
export const FETCH_FOCUSED_COMMENT_REQUEST = 'FETCH_FOCUSED_COMMENT_REQUEST';
export const FETCH_FOCUSED_COMMENT_SUCCESS = 'FETCH_FOCUSED_COMMENT_SUCCESS';
export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const SERVICE_FAILURE = 'SERVICE_FAILURE';

// SYNCHRONOUS ACTION CREATORS
export const postCommentRequest = sync(POST_COMMENT_REQUEST, 'comment');
export const postCommentSuccess = sync(POST_COMMENT_SUCCESS);
export const fetchCommentsRequest = sync(FETCH_COMMENTS_REQUEST);
export const fetchCommentsRequestSuccess = sync(FETCH_COMMENTS_SUCCESS, 'comments');
export const fetchFocusedCommentRequest = sync(FETCH_FOCUSED_COMMENT_REQUEST);
export const fetchFocusedCommentSuccess = sync(FETCH_FOCUSED_COMMENT_SUCCESS, 'comment');
export const serviceFailure = sync(SERVICE_FAILURE, 'error');

// ASYNCHRONOUS FETCH ACTION HANDLERS
export const postComment = async(args => rest.post('/comment', args[0]), postCommentRequest, postCommentSuccess, serviceFailure); 
export const fetchComments = async(() => rest.get('/comment'), fetchCommentsRequest, fetchCommentsRequestSuccess, serviceFailure); 
export const fetchFocusedComment = async(args => rest.get(`/comment/${args[0]}`), fetchFocusedCommentRequest, fetchFocusedCommentSuccess, serviceFailure); 

// SPECIALIZED ACTION HANDLERS
export const focusComment = function (commentId) {
    return (dispatch, getState) => {
        let focused = getState().focused;
        return (!focused || focused.id!==commentId) ?  
            dispatch(fetchFocusedComment(commentId))
          : Promise.resolve();
    };
  };
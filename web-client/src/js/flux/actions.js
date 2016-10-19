import rest from '../rest'
import {sync, async} from './util'

// ACTION TYPES
export const POST_COMMENT_REQUEST = 'POST_COMMENT_REQUEST';
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const SERVICE_FAILURE = 'SERVICE_FAILURE';

// SYNCHRONOUS ACTION CREATORS
export const postCommentRequest = sync(POST_COMMENT_REQUEST, 'comment');
export const postCommentSuccess = sync(POST_COMMENT_SUCCESS);
export const fetchCommentsRequest = sync(FETCH_COMMENTS_REQUEST);
export const fetchCommentsRequestSuccess = sync(FETCH_COMMENTS_SUCCESS, 'comments');
export const serviceFailure = sync(SERVICE_FAILURE, 'message');

// ASYNCHRONOUS ACTION HANDLERS
export const fetchComments = async(() => rest.get('/comment'), fetchCommentsRequest, fetchCommentsRequestSuccess, serviceFailure); 
export const postComment = async(args => rest.post('/comment', args[0]), postCommentRequest, postCommentSuccess, serviceFailure); 
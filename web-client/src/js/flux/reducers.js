import * as Actions from './actions'
import { reducer } from './util'
import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

const commentsInitialState =  {
    all: [],
    commentPostedTime: null
};
const notificationInitialState = null;

export const comments = reducer(commentsInitialState, {
        
    [Actions.FETCH_COMMENTS_SUCCESS]: (state, action) => 
        objectAssign({}, state, { 
            all: action.comments
        }),
    
    [Actions.POST_COMMENT_SUCCESS]: (state, action) =>
        objectAssign({}, state, { 
            commentPostedTime: new Date().getTime()
        })
    
});

export const notification = reducer(notificationInitialState, {
    
    [Actions.POST_COMMENT_SUCCESS]: (state, action) =>
        objectAssign({}, state, {
            message: 'Comment posted !',
            level: 'success'
        })
    
});

export const mainReducer = combineReducers({ comments, notification});
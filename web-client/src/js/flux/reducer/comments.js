import * as Actions from '../actions'
import objectAssign from 'object-assign';

import {reducer} from '../util'

/**
 * Comments reducer state structure
 */
const initialState =  {
    list: [],
    focused: null,
    listInvalidated: false,
    pendingFetch: false
};


/**
 * Comments reducer
 */
export default reducer(initialState, {
        
    [Actions.FETCH_COMMENTS_SUCCESS]: (state, action) =>  
        objectAssign({}, state, { 
            pendingFetch: false,
            listInvalidated: false,
            list: action.comments
        }),
        
    [Actions.FETCH_COMMENTS_REQUEST]: (state, action) =>  
        objectAssign({}, state, { 
            pendingFetch: true
        }),
    
    [Actions.FETCH_FOCUSED_COMMENT_REQUEST]: (state, action) =>  
        objectAssign({}, state, { 
            pendingFetch: true
        }),
    
    [Actions.FETCH_FOCUSED_COMMENT_SUCCESS]: (state, action) =>  
        objectAssign({}, state, { 
            focused: action.comment,
            pendingFetch: false
        }),
    
    [Actions.POST_COMMENT_REQUEST]: (state, action) => 
        objectAssign({}, state, { 
            pendingFetch: true,
        }),
        
    [Actions.POST_COMMENT_SUCCESS]: (state, action) =>
        objectAssign({}, state, { 
            pendingFetch: false,
            listInvalidated: true
        }),
        
    [Actions.SERVICE_FAILURE]: (state, action) =>
        objectAssign({}, state, { 
            pendingFetch: false
        })
    
});
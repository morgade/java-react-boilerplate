    import objectAssign from 'object-assign';

import * as Actions from '../actions'
import {reducer} from '../util'


/**
 * Comments reducer state structure
 */
const initialState =  null;

/**
 * Notification reducer
 */
export default reducer(initialState, {
    
    [Actions.POST_COMMENT_SUCCESS]: (state, action) =>
        objectAssign({}, state, {
            message: 'Comment posted !',
            level: 'success'
        }),
    
    [Actions.SERVICE_FAILURE]: (state, action) => 
        objectAssign({}, state, {
            message: action.error.message,
            level: 'error'
        })
    
});
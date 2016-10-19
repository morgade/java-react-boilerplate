import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import Actions from './actions'
import {mainReducer} from './reducers'

export default createStore(mainReducer,
                            applyMiddleware(
                                thunkMiddleware, // lets us dispatch() functions
                                createLogger() // neat middleware that logs actions
                            )
                );
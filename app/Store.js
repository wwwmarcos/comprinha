import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'
import promise from 'redux-promise-middleware'

const createStoreWithMiddleware = applyMiddleware(thunk, promise())(createStore)
const combinedReducers = combineReducers(reducers)

export default createStoreWithMiddleware(combinedReducers)
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const combinedReducers = combineReducers(reducers)

export default createStoreWithMiddleware(combinedReducers)
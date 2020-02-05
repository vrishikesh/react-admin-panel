import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

// console.log('Initial State', store.getState());
// store.subscribe(() => console.log('Updated store', store.getState()))

export default store

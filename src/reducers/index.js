import { combineReducers } from 'redux'

import cityReducer from './City'
import loginReducer from './Login'

export default combineReducers({
  city: cityReducer,
  login: loginReducer
})

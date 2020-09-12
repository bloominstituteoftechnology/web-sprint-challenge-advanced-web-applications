import {combineReducers} from 'redux'
import {colorsReducer} from './colorsReducer'
import {authReducer} from './authReducer'

export const rootReducer = combineReducers({
  colors: colorsReducer,
  auth: authReducer,
})

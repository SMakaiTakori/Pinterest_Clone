import {combineReducers} from 'redux'
import { pinsReducer } from './pinsReducer'

export const rootReducer = combineReducers({
    pins: pinsReducer
})


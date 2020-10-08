import {combineReducers} from 'redux'
import { categoriesReducer } from './categoriesReducer'
import { pinsReducer } from './pinsReducer'

export const rootReducer = combineReducers({
    pins: pinsReducer,
    catData: categoriesReducer
})


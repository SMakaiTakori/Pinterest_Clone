import {combineReducers} from 'redux'
import { categoriesReducer } from './categoriesReducer'
import { pinsReducer } from './pinsReducer'
import { favoritesReducer } from './favoritesReducer'

export const rootReducer = combineReducers({
    pins: pinsReducer,
    categories: categoriesReducer,
    favorites: favoritesReducer
})


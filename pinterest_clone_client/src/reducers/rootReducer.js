import {combineReducers} from 'redux'
import { categoriesReducer } from './categoriesReducer'
import { pinsReducer } from './pinsReducer'
import { favoritesReducer } from './favoritesReducer'
import { queriesReducer } from './queriesReducer'

export const rootReducer = combineReducers({
    pins: pinsReducer,
    categories: categoriesReducer,
    favorites: favoritesReducer,
    queries: queriesReducer
})


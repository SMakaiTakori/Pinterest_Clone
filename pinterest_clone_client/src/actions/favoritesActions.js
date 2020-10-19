import { favoritesReducer } from "../reducers/favoritesReducer"


export const addFavorites = (favorites) => {
    return {
        type: 'SET_FAVORITES',
        payload: favorites
    }
}




export const favoritesReducer = (state = [], action) => {
    console.log(action)
    switch(action.type){
        case 'SET_FAVORITES':
            return {
                ...state, favorites: [...state.favorites, action.payload]
                //copy my state and then add new favorites to that state and add in new
                //data so we can update our state
            } 
            default:
                return state;
    }
}


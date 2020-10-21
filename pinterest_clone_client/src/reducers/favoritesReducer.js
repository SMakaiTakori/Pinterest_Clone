

export const favoritesReducer = (state = [], action) => {

    switch(action.type){
        case 'SET_FAVORITES':
            return [...state, action.payload]                 
                //copy my state and then add new favorites to that state and add in new
                //data so we can update our state
        case 'FETCH_FAVORITES':  
            return [...state, action.favorite]
            default:
                return state;
    }
}


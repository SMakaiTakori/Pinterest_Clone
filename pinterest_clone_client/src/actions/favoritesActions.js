

export const addFavorites = (favorites) => {
    return {
        type: 'SET_FAVORITES',
        payload: favorites
    }
}

export const fetchFavorites = (favorites) => {
    // debugger;
    return dispatch => {
    fetch('http://localhost:3080/pins', {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(favorites)
        })
        .then(resp => resp.json())
        .then(favorite => dispatch({ type: 'FETCH_FAVORITES', favorite}))
        
}

}


export const fetchPins = (query) => {
    console.log('h')
    return (dispatch) => {
        console.log('i')
        fetch(`https://pixabay.com/api/?key=18540307-a22579c944a9b0e0dd7d2004b&q=${query}`)
        .then(res => res.json())
        .then(pinsData => {
            console.log('j')
            return dispatch({ type: 'FETCH_PINS', payload: pinsData.hits })
        })
    }
}


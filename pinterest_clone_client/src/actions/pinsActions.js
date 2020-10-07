

export const fetchPins = (query) => {
    return (dispatch) => {
        fetch(`https://pixabay.com/api/?key=18540307-a22579c944a9b0e0dd7d2004b&q=${query}`)
        .then(res => res.json())
        .then(pinsData => dispatch({ type: 'FETCH_PINS', payload: pinsData.hits }))
            // setPinsData(data.hits)
    }
}



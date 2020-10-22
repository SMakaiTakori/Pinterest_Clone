

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

export const fetchQuery = (query) => {

    let body = {
        pin: {query}
    }
    console.log('b')
    return (dispatch) => {
        // console.log('c') //
        fetch('http://localhost:3080/pins', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(queryData => {
            // console.log('d') //
            return dispatch({ type: 'FETCH_QUERY', queryData })
        })
        // console.log('e') // 
    }
    console.log('f')
}

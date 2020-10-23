

export const fetchQueries = () => {
  
    return (dispatch) => {
        fetch(`http://localhost:3080/pins`)
        .then(res => res.json())
        .then(queries => dispatch({ type: 'FETCH_QUERIES', queries }))    
    }
}

export const postQuery = (query) => {

    let body = {
        pin: {query}
    }
    console.log('b')
    return (dispatch) => {
        console.log('c') 
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
            console.log('d') 
            return dispatch({ type: 'POST_QUERY', queryData })
        })
        console.log('e') 
    }
    console.log('f')
}

//Fetch images to pin from API
// const BASE_URL = 'https://pixabay.com/api/?key=18540307-a22579c944a9b0e0dd7d2004b&q=yellow+flowers&image_type=photo'




export const fetchPins = (query) => {
    return (dispatch) => {
        fetch(`https://pixabay.com/api/?key=18540307-a22579c944a9b0e0dd7d2004b&q=${query}`)
        .then(res => res.json())
        .then(data => dispatch({ type: 'FETCH_PINS', payload: data.hits }))
            // setPinsData(data.hits)
    }
}

// export const fetchPins = () => {
//     return (dispatch) => {
//         fetch(`https://pixabay.com/api/?key=18540307-a22579c944a9b0e0dd7d2004b&q=dogs`)
//         .then(res => res.json())
//         // .then(data => dispatch({ type: 'FETCH_PINS', payload: data.hits }))
//         .then(data => console.log(data.hits));


//     }
// }




export const fetchCategories = () => {
    return (dispatch) => {
        fetch(`http://localhost:3080/categories`)
        .then(res => res.json())
        .then(catData => dispatch({ type: 'FETCH_CATEGORIES', payload: catData }))

    }
}

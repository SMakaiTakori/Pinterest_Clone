

export const fetchCategories = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/categories`)
        .then(res => res.json())
        .then(catData => dispatch({ type: 'FETCH_CATEGORIES', payload: catData }))
    }
}

// 
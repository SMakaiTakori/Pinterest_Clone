export const queriesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_QUERIES':
            return action.queries
        case 'POST_QUERY':
            return action.queryData 
        default:
                return state
    }
}

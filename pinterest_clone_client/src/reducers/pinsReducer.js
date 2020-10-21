export const pinsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PINS':
            return  action.payload
        case 'FETCH_QUERY':
            return [...state, action.queryData]
        default:
                return state
    }
}


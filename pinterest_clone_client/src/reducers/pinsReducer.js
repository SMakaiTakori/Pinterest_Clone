export const pinsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PINS':
            return {pinsData: action.payload}
        default:
                return state
    }
}
const countReducer = (state = [], action) => {
    if (action.type === 'SET_NUM_ITEMS') {
        return action.payload;
    } else {
        return state;
    }
}

export default countReducer;
// const defaultState = [{ description: 'Tiger', 
//                         image_url: 'https://via.placeholder.com/50x50', 
//                         person_id: 1}]


const shelfReducer = (state= [10], action) => {
    // switch (action.type) {
    //     case 'SET_SHELF':
    //         return action.payload;
    //     default:
    //         return state;
    // }
    if (action.type === 'SET_SHELF') {
        return action.payload;
    }
    return state;
}

export default shelfReducer;
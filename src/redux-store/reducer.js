

const reducer = (state = null, action) => {

    switch(action.type) {
        case 'LOG_IN': {
            return state = action.payload;
        }
        default:
            return state;
    }
}

export default reducer;
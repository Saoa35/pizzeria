const STORE_USER = 'store_user';

const initialState = localStorage.getItem(STORE_USER);
const initialStateToObject = JSON.parse(initialState);

const currentState = {
    login: initialStateToObject ? initialStateToObject.login : null
}

const reducer = (state = currentState, action) => {

    switch(action.type) {
        case 'LOG_IN': {
            localStorage.setItem(STORE_USER, JSON.stringify(action.payload));
            return state = action.payload;
        }

        case 'LOG_OUT': {
            localStorage.removeItem(STORE_USER);
            return state = action.payload;
        }
        default:
            return state;
    }
}

export default reducer;
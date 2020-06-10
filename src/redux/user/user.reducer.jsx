const INITIAL_STSTE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STSTE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
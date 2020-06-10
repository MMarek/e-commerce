import {UserActionTypes} from "./user.types";

const INITIAL_STSTE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STSTE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
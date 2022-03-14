import { USER_STATE_CHANGE, CLEAR_DATA } from '../constants'

const initialState = {
    currentUser: null,
    loaded: false,
    posts: [],
    following: []
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser,
                loaded: action.loaded
            }
            case CLEAR_DATA:
                return{
                    currentUser: null,
                    loaded: false,
                    posts: [],
                    following: []
                }
        default:
            return state;
    }
}
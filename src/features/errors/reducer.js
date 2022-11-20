import { ACTIONS } from "./actions";

const INITIAL_STATE = {
    hasError: false
}

export default function errors (state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                hasError: true,
                type: action.payload.type,
                message: action.payload.message
            }
        case ACTIONS.CLEAR_ERRORS:
            return {
                ...state,
                hasError: false
            }
        default:
            return state;
    }
}
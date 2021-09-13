import { ACTIONS } from "./actions";

const INITIAL_STATE = {
    hasError: false,
    errorList: []
}

export default function errors (state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                hasError: true,
                errorList: [...state.errorList, {type: action.payload.type, message: action.payload.message}]
            }
        case ACTIONS.CLEAR_ERRORS:
            return {
                ...state,
                hasError: false,
                errorList: []
            }
        default:
            return state;
    }
}
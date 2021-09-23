import * as actions from './actions'

const INITIAL_STATE = {
    name: null,
    avatarUrl: null,
}

export default function user (state = INITIAL_STATE, action) {
    switch(action.type) {
        case actions.GET_USER:
            return {
                ...state,
                ...action.user
            }
        case actions.UPDATE_USER_TODOS:
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    todos: [...state[action.user].todos, action.id]
                }
            }
        default :
            return state
    }
}
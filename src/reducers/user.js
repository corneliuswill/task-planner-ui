import * as actions from '../actions/user'

export default function user (state = null, action) {
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
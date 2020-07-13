import * as actions from '../actions/todos'

const INITIAL_STATE = []

export default function todos (state = INITIAL_STATE, action) {
    switch(action.type) {
        case actions.GET_TODOS__REQUEST:
            return {
                //...state,
                ...action.todos
            }
        case actions.ADD_TODO:
            return state.concat([action.todo])
        case actions.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case actions.TOGGLE_TODO:
            return [...state]
        default:
            return state
    }
}


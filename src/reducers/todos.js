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
            return updateObjectInArray(state, action)
        default:
            return state
    }
}

function updateObjectInArray(array, action) {
    return array.map((item, index) => {
        if (item.id !== action.id) {
            return item
        }

        return {
            ...item,
            completed: !action.completed
        }
    })
}

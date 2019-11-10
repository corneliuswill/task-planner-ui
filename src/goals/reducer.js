import * as actions from './actionTypes';

export default function goals (state = [], action) {
    switch(action.type) {
        case actions.ADD_GOAL:
            return state.concat([action.goal])
        case actions.REMOVE_GOAL:
            return state.filter((goal) => goal.id !== action.id)
        default:
            return state
    }
}


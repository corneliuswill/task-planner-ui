
import * as actions from './actionTypes';

export function addGoalAction (goal) {
    return {
        type: actions.ADD_GOAL,
        goal,
    }
}

export function removeGoalAction (id) {
    return {
        type: actions.REMOVE_GOAL,
        id,
    }
}

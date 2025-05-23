import { COUNTER } from "../constants"

export const ACTIONS = {
    UPDATE_COUNTER: 'UPDATE_COUNTER'
}

export function updateCounter(change = COUNTER.INCREMENT) {
    return {
        type: ACTIONS.UPDATE_COUNTER,
        change
    }
}
import { COUNTER } from "../common/constants";

import { ACTIONS } from "./actions";

const INITIAL_STATE = {
    header: {},
    sidebar: {
        counter: 0,
        isVisible: true
    },
    taskPanel: {}
}

export default function uiReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTIONS.UPDATE_COUNTER:
            return updateCounterState(state, action);
        default:
            return state;
    }
}

function updateCounterState(state, action) {
    const change = action.change;
    let counter;

    console.log('change', change);
    if (change === COUNTER.INCREMENT) {
        counter = state.sidebar.counter + 1;
    } else {
        counter = state.sidebar.counter - 1;
    }

    return {
        ...state,
        sidebar: {
            ...state.sidebar,
            counter
        }
    }
}
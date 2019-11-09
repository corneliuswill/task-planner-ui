import { FETCH_TODOS } from '../actions/types';

export default (state = {}, action) => {
    switch(action) {
        case FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
}

function todos (state = [], action) {
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    }

    return state
}
import * as actions from './actionTypes';

export default function todos (state = [], action) {
    switch(action.type) {
        case actions.FETCH_TODOS:
            return action.payload;
        case actions.ADD_TODO:
            return state.concat([action.todo])
        case actions.REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case actions.TOGGLE_TODO:
            return state.map((todo) => todo.id !== action.id ? todo:
                Object.assign({}, todo, { complete: !todo.complete}))  
        default:
            return state                      
    }
}

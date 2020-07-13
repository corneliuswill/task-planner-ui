// create store
export default function createStore(reducer) {
    // The store should have 4 parts
    // 1. The state
    // 2. Get the state
    // 3. Listen to changes on the state
    // 4. Update the state

    let state;
    let listeners = [];

    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}

/* Test store

store.subscribe(() => {
    console.log('The new state is: ', store.getState());
})

store.dispatch(addTodoAction({
    id: 0,
    name: 'Learn Redux',
    complete: false
}))

store.dispatch(addTodoAction({
    id: 1,
    name: 'Create First Video Tutorial',
    complete: false
}))

store.dispatch(addTodoAction({
    id: 2,
    name: 'Create Blog',
    complete: false
}))

store.dispatch(addGoalAction({
    id: 0,
    name: '10000 subscribers',
    complete: false
}))

store.dispatch(addGoalAction({
    id: 1,
    name: '$100000/month',
    complete: false
}))

store.dispatch(removeTodoAction(0));
store.dispatch(toggleTodoAction(1));

*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reduxThunk from 'redux-thunk';
//import reducers from './reducers';
//const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

import createStore from './configureStore';
import reducer from './rootReducer'
import { components } from './app';
import { addTodoAction, removeTodoAction, toggleTodoAction } from './todos/actions';
import { addGoalAction } from './goals/actions';

const store = createStore(reducer);

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

const App = components.App;

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();

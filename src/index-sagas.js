import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { App } from './app';
import { configureStore } from './stores/configure-store-with-saga';
import { ErrorBoundary }  from './features/errors';

const store = configureStore();

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Use when using Saga middleware
store.dispatch({
    type: 'GET_LISTS__REQUEST'
});

store.dispatch({
    type: 'GET_TASKS__REQUEST'
});

store.dispatch({
    type: 'GET_NOTIFICATIONS_REQUEST'
})

// Stop listening to state updates
unsubscribe();

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ErrorBoundary >
                <App/>
            </ErrorBoundary>
        </Provider>
        ,
        document.getElementById('root')
    )
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(App, renderApp);
}

renderApp()

registerServiceWorker()


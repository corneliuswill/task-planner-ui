import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { App } from './app';
import { configureStore } from './stores/configure-store-with-client-middleware';
import { ErrorBoundary }  from './features/errors';
import { getListsAction } from './features/lists/actions';
import { getTasksAction } from './features/task/actions';
import { getNotificationsAction } from './features/notifications/actions';

const store = configureStore();

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

//Use when using custom client middleware
store.dispatch(getListsAction());
store.dispatch(getTasksAction());
store.dispatch(getNotificationsAction());

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


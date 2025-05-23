import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { App } from './app';
import { configureStore } from './stores';
import { ErrorBoundary }  from './features/errors';
import { getLists } from './features/lists/get-lists-thunk';
import { getListsUrl, getNotificationsUrl, getTasksUrl } from './utils/url-utils';
import { getOptions } from './utils/api-utils';
import { getTasks } from './features/task/get-tasks-thunk';
import { getNotifications } from './features/notifications/get-notifications-thunk';
// import { getListsAction } from './features/lists/actions';
// import { getTasksAction } from './features/task/actions';
// import { getNotificationsAction } from './features/notifications/actions';

const store = configureStore();

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Use when using Saga middleware
// store.dispatch({
//     type: 'GET_LISTS__REQUEST'
// });

// store.dispatch({
//     type: 'GET_TASKS__REQUEST'
// });

// store.dispatch({
//     type: 'GET_NOTIFICATIONS_REQUEST'
// })

// Use when using thunk or custom client middleware
store.dispatch(getLists(getListsUrl(), getOptions()));
store.dispatch(getTasks(getTasksUrl(), getOptions()));
store.dispatch(getNotifications(getNotificationsUrl(), getOptions()))

// Use when using custom client middleware
// store.dispatch(getListsAction());
// store.dispatch(getTasksAction());
// store.dispatch(getNotificationsAction());

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


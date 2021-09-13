import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'

import { App } from './app';
import configureStore from './store/configure-store';
import { ErrorBoundary }  from './features/errors';
import { actions as listsActions } from './features/lists';
import { actions as tasksActions } from './features/task';
import { actions as notificationActions } from './features/notifications';
//import { loadfromLocalStorage } from './common/utils/app-utils';

const store = configureStore()

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(listsActions.getListsAction()).then((data) => {
    localStorage.setItem('lists', JSON.stringify(data.payload));
    store.dispatch(tasksActions.getTasksAction()).then((data) => {
        localStorage.setItem('tasks', JSON.stringify(data.payload));
    });
    store.dispatch(notificationActions.getNotificationsAction()).then((data) => {
        localStorage.setItem('notifications', JSON.stringify(data.payload));
    })
});

//TODO: update to use localStorage for data persistence when running in development mode
// loadfromLocalStorage('lists').then(lists => {
//     console.log('lists', JSON.parse(lists));
//     store.dispatch(listsActions.setListsAction(JSON.parse(lists)));
//     loadfromLocalStorage('tasks').then(tasks => {
//         console.log('tasks', JSON.parse(tasks));
//     }).catch(error => {
//         console.log(error);
//     });
// }).catch(error => {
//     console.log(error);
// });

// loadfromLocalStorage('notifications').then(notifications => {
//     console.log('notifications', JSON.parse(notifications));
// }).catch(error => {
//     console.log(error);
// });

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
    module.hot.accept(App, renderApp)
}

renderApp()

registerServiceWorker()


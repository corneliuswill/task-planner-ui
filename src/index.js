import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { App } from './app';
import configureStore from './store/configure-store-with-saga';
import { ErrorBoundary }  from './features/errors';

const store = configureStore();

import { asyncRequest } from './features/axios-factory';
import { getListsUrl } from './utils/url-utils';

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch({
    type: 'GET_LISTS__REQUEST'
});

store.dispatch({
    type: 'GET_TASKS__REQUEST'
});

store.dispatch({
    type: 'GET_NOTIFICATIONS_REQUEST'
})

asyncRequest({
    method: 'get',
    url: getListsUrl()
}, {
    onSuccess: () => { console.log('Success') },
    onFailure: () => { console.log('Failure') },
    catchAll: () => { console.log('Catch All') }
}
).then(res => console.log('Axios Response', res));

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


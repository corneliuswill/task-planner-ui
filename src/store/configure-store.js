import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

//import { composeWithDevTools } from 'redux-devtools-extension'
//import { loadingBarMiddleware } from 'react-redux-loading-bar'

import reducer from '../root-reducer';
import rootSaga from '../sagas';

//import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from '../middleware/logger-middleware'
import clientMiddleware from '../middleware/client-middleware'

export default function configureStore() {

    //const middlewares = [thunkMiddleware, loggerMiddleware, loadingBarMiddleware]
    /*
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(secretMiddleware)
    }npm install --save-dev redux-devtools-extension
    */

    //const middlewareEnhancer = applyMiddleware(...middlewares)

    //const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    //const composedEnhancers = composeWithDevTools(...enhancers)

    const sagaMiddleware = createSagaMiddleware();
    let middlewares = applyMiddleware(sagaMiddleware, thunkMiddleware, clientMiddleware, loggerMiddleware)

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        reducer,
        composeEnhancers(middlewares)
    )

    // then run the saga
    sagaMiddleware.run(rootSaga);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept(['../root-reducer'], () => store.replaceReducer(reducer))
    }

    return store
}
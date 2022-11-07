import { createStore, applyMiddleware, compose,  } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';

import rootReducer from '../root-reducer';
import rootSaga from '../root-saga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware, logger];

    const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    );

    const store = createStore(rootReducer, enhancer);

    sagaMiddleware.run(rootSaga);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept(['../root-reducer'], () => store.replaceReducer(rootReducer))
    }

    return store;
}
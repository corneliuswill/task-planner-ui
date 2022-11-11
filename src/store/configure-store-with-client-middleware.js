import { createStore, applyMiddleware, compose } from 'redux';
import clientMiddleware from '../middleware/client-middleware';
import logger from 'redux-logger';

import rootReducer from '../root-reducer';

export default function configureStore() {
    const middlewares = [clientMiddleware, logger];

    const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    );

    const store = createStore(rootReducer, enhancer);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept(['../root-reducer'], () => store.replaceReducer(rootReducer))
    }

    return store;
}
import { createStore, applyMiddleware, compose,  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import clientMiddleware from '../middleware/client-middleware';
import rootReducer from './reducers';

export default function configureStore() {
    const middlewares = [thunkMiddleware, clientMiddleware, logger];

    const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    );

    const store = createStore(rootReducer, enhancer);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept(['./reducers'], () => store.replaceReducer(rootReducer))
    }

    return store;
}
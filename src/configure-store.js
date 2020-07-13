import { applyMiddleware, compose, createStore } from 'redux'
//import thunkMiddleware from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import { loadingBarMiddleware } from 'react-redux-loading-bar'

import reducer from  './reducers'

//import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'

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


    let middlewares = applyMiddleware(loggerMiddleware)

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        reducer,
        composeEnhancers(middlewares)
    )

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept(['./reducers'], () => store.replaceReducer(reducer))
    }

    return store
}
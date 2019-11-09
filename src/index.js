import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter , StaticRouter} from 'react-router-dom';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reduxThunk from 'redux-thunk';
//import reducers from './reducers';

import { components } from './app';
const App = components.App;

//const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
console.log('components', components.App);
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();

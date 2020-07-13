import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'

import { AppContainer } from './containers'
import configureStore from './configure-store'

import { addTodoAction } from './actions/todos'
import { setVisibilityFilterAction, VisibilityFilters } from './actions/visibility-filter'

const store = configureStore()

// Log the initial state
console.log('Initial State', store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodoAction('File taxes'))
store.dispatch(addTodoAction('Research on how to lower property taxes'))
store.dispatch(addTodoAction('Refinance'))
store.dispatch(addTodoAction('Setup house monitoring'))
store.dispatch(addTodoAction('Finish App design'))

store.dispatch(setVisibilityFilterAction(VisibilityFilters.SHOW_ALL))

// Stop listening to state updates
unsubscribe()

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer />
        </Provider>,
        document.getElementById('root')
    )
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(AppContainer, renderApp)
}

renderApp()

registerServiceWorker()


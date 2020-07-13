import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import {
  Tasks,
  Login,
  SignUp,
  ResetPassword,
  Settings,
  Dashboard,
  NotFound
} from '../../routes';

import { fakeAuth } from '../../utils/auth'
import AppBar from '../app-bar/app-bar'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './app.css';

function App(props) {
  const [ isLoggedIn, setIsLoggedIn ] =  useState(false)
  const [ color, setBackgroundColor ] = useState('#FAFAFA')
  const [ title, setTitle ] = useState('')
  const [ isLargeTitle, setLargeTitle ] = useState(true)

  const handleLogIn = (userId) => {
    fakeAuth.authenticate()
    setIsLoggedIn(true)
    props.setAuthedUser(userId)
  }

  const handleScreenChange = (title, color) => {
    changeTitle(title)
    changeBackgroundColor(color)
  }

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color)
  }

  const changeTitle = (title) => {
    setTitle(title)
  }

  const displayLargeTitle = (val) => {
    setLargeTitle(val)
  }

  const handleAddTodo = (text) => {
    this.props.addTodo(text)
  }

  return (
    <Router>
      <div id='app' style={{ background: color }}>
        {isLoggedIn &&
          <AppBar title={title} largeTitle={isLargeTitle} />
        }
        <LoadingBar/>
        {props.loading === true
          ? null
          :
          <Switch>
            <PrivateRoute path='/' exact>
              <Dashboard handleScreenChange={handleScreenChange} displayLargeTitle={displayLargeTitle} />
            </PrivateRoute>
            <Route path='/login' exact>
              <Login handleLogIn={handleLogIn}/>
            </Route>
            <Route path='/reset' component={ResetPassword}/>
            <Route path='/signup' component={SignUp}/>
            <PrivateRoute path='/settings' exact>
              <Settings/>
            </PrivateRoute>
            <PrivateRoute path='/tasks' exact>
              <Tasks displayLargeTitle={displayLargeTitle} handleAddToDo={handleAddTodo}/>
            </PrivateRoute>
            <Route path='/*' component={NotFound} />
          </Switch>
        }
      </div>
    </Router>
  )
}

App.propTypes = {
  authedUser: PropTypes.string,
  avatarURL: PropTypes.string,
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
  name: PropTypes.string,
  setAuthedUser: PropTypes.func,
  getInitialData: PropTypes.func,
  getTodos: PropTypes.func
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.object
}

export default App
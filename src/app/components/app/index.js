import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {Route, Switch} from 'react-router-dom';

import Login from '../../../routes/login/login';
import ResetPassword from '../../../routes/reset';
import Home from '../../../routes/home.js';
import Settings from '../../../routes/settings';
import Dashboard from '../../../routes/dashboard';
import './app.css';

class App extends Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/reset' component={ResetPassword}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </div>
    );
  }
}

export default App;

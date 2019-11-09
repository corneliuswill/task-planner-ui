import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.png';
import './login.css';

class Login extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="main">
              <div className="product-branding text-center">
                <div className="logo">
                  <div className="app-icon">
                    <img src={logo} alt="logo"/>
                  </div>
                </div>
                <h1 className="product-name">My Todo</h1>
              </div>
              <form className="form-signin">
                <div className="form-input">
                <input type="email" className="form-control" name="email" placeholder="Email"/>
                </div>

                <div className="form-input">
                <input type="password" className="form-control" name="password" placeholder="Password"/>
                </div>   

                <div className="form-input checkbox text-center">
                <label htmlFor="remember-pwd"><input type="checkbox"/> Remember Password</label>
                </div>

                <div className="actions">
                <button type="button" className="btn btn-primary btn-lg btn-block">Sign In</button> 
                </div>

                <div className="forgot-pwd text-center">
                <Link to="/forget-passwd"> Forgot your passsword?</Link>
                </div>

                <div className="seperator"></div>

                <div className="signup text-center">
                <a href="/sign-up">Sign Up</a>
                </div>
              </form>   
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

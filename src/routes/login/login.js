import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { login } from '../../utils/auth-utils';
import './login.css';

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await login({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            <p>Password</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;

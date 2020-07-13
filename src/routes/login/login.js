import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import logo from '../../logo.png';
import styles from './login.css';

function Login(props) {
  const [userId, setUserId] = useState('')
  let history = useHistory()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: '/' } }

  let handleChange = (event) => {
    setUserId(event.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    props.handleLogIn(userId)
    history.replace(from)
  }

  return (
    <div className='container login'>
      { from.pathname === '/' ?
      null
      :
      <div className='alert alert-danger' role='alert'>
        <h4 className="alert-heading">Unauthorized!</h4>
        <p>You must log in to view the page at {from.pathname}</p>
      </div>
      }

      <form className='form-signin' name='login-form' onSubmit={handleSubmit}>
        <img className="logo mb-4" src={logo} alt="logo" width="72" height="72"/>

        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" value={userId} onChange={handleChange} placeholder="Email address" required autoFocus/>

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>

        <div className={styles.actionGroup}>
          <div className='action-group-button'>
            <button type='submit' className='btn btn-block button-primary'>Sign In</button>
          </div>

          <div className='action-group-link'>
            <Link to='/reset'>Forgot your passsword?</Link>
          </div>

          <div className='seperator'></div>

          <div className='action-group-link'>
            <Link to='/signup'>Sign Up</Link>
          </div>
        </div>
      </form>

    </div>

  )
}

Login.propTypes = {
  users: PropTypes.object,
  handleLogIn: PropTypes.func
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Login)

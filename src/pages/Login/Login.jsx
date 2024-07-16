import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login to Your Account</h1>
        <div className="login-fields">
          <input type="email" placeholder="Your Email Address" />
          <input type="password" placeholder="Your Password" />
        </div>
        <div className="buttons">
          <button className="forgot-password">
            <Link style={{ textDecoration: 'none' }} to="/password">
              Forgot Password?
            </Link>{' '}
          </button>
          <button className="continue">
            <Link style={{ textDecoration: 'none' }} to="/">
              Continue
            </Link>
          </button>
        </div>
        <div className="login-log">
          <p>New to KidzHub?</p>
          <span>
            <Link style={{ textDecoration: 'none' }} to="/signup">
              Create an account Here!
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

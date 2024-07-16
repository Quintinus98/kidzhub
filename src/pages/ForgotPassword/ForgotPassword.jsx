import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div className="forgotpassword">
      <div className="forgot-password-container">
        <div className="forgot-password-left">
          <h1>Kidzhub Password Reset</h1>
          <p>Enter your email address and a link will be sent to your email.</p>
        </div>
        <div className="forgot-password-right">
          <h2>Forgot Password</h2>
          <form className="forgot-password-right-form">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" />
            <button type="submit">Send Reset Link</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

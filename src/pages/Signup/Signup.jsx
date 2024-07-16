import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Address" />
          <input type="password" placeholder="Your Password" />
        </div>
        <div className="signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use of privacy policy</p>
        </div>
        <button className="signup-continue">
          <Link to="/">Continue</Link>
        </button>
        <div className="signup-log">
          <p>Already have an account?</p>
          <span>
            <Link style={{ textDecoration: 'none' }} to="/login">
              Login Here!
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;

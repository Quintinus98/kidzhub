import React from 'react';
import './CustomRequest.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

const CustomRequest = () => {
  return (
    <div>
      <NavBar />
      <div className="custom-request">
        <div className="customrequest-container">
          <h3>Place an order</h3>
          <input type="text" placeholder="Enter your Full name" />
          <input type="email" placeholder="Enter your Email Address" />
          <input type="text" placeholder="Enter your Phone Number" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomRequest;

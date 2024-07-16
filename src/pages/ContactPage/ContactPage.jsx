import React from 'react';
import './ContactPage.css';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <div className="contactpage">
        <div className="contactpage-container">
          <h1>Contact us</h1>
          <div className="contact-help">
            <p>We'd love to hear from you!</p>
            <p> Our team is here to help you with any inquiries.</p>
          </div>
          <div className="contact-address">
            <p>+234-444-444-4444</p>
            <p>Kidzhub@example.com</p>
            <p>Kidzhub2@example.com</p>
            <p>123 Address, Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

import React from 'react';
import './Footer.css';
import IMG from '../../assets/IMG1.jpg';
import facebook_logo from '../../assets/facebook_logo.jpg';
import insta_logo from '../../assets/insta.jpg';
import whatsapp_logo from '../../assets/whatsapp_logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <Link style={{ textDecoration: 'none' }} to="/">
          <img src={IMG} alt="" />
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/">
          <p>KIDZHUB</p>
        </Link>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>About</li>
        <li>
          <Link
            style={{ textDecoration: 'none' }}
            to="/contact"
            onClick={handleScroll}
          >
            {' '}
            Contact
          </Link>
        </li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={insta_logo} alt="inst" />
        </div>
        <div className="footer-icons-container">
          <img src={facebook_logo} alt="facebook" />
        </div>
        <div className="footer-icons-container">
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp_logo} alt="whatsapp" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

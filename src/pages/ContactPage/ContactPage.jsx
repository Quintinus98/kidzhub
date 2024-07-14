import React from 'react';
import './ContactPage.css';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';

const ContactPage = () => {
  return (
    <div>
        <NavBar />
        <div className='contactpage'>
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
            <div className="contact-request">
                <h3>Place an order</h3>
                <input type="text" placeholder='Enter your Full name'/>
                <input type="email" placeholder='Enter your Email Address'/>
                <input type="text" placeholder='Enter your Phone Number'/>
                <input type="text" placeholder='Message'/>
                <button>Send</button>
            </div>
            <div className="contact-review">
                <h3>Would you like to drop a review for us?</h3>
                <p>Your opinion means a lot to us!</p>
                <input type="text" placeholder='Enter your Full name'/>
                <input type="email" placeholder='Enter your Email Address'/>
                <input type="text" placeholder='Enter your Phone Number'/>
                <input type="text" placeholder='Message'/>
                <button>Send</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage

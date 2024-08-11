import React from 'react';
// import './ContactPage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-navbar text-center bg-gray-700 flex justify-center p-6">
        <div className="w-11/12 bg-gray-500 py-10 rounded-lg text-center">
          <h1 className="text-white text-5xl font-semibold mb-5">Contact Us</h1>
          <div className="text-black text-2xl my-2">
            <p>We'd love to hear from you!</p>
            <p> Our team is here to help you with any inquiries.</p>
          </div>
          <div className="flex flex-wrap text-xl text-white gap-3">
            <p className="shadow-bg-red-700 p-5 flex-1 max-w-[calc(50%-2rem)] rounded-md m-2 shadow-md">
              +234-444-444-4444
            </p>
            <p className="shadow-bg-red-700 p-5 flex-1 max-w-[calc(50%-2rem)] rounded-md m-2 shadow-md">
              Kidzhub@example.com
            </p>
            <p className="shadow-bg-red-700 p-5 flex-1 max-w-[calc(50%-2rem)] rounded-md m-2 shadow-md">
              Kidzhub2@example.com
            </p>
            <p className="shadow-bg-red-700 p-5 flex-1 max-w-[calc(50%-2rem)] rounded-md m-2 shadow-md">
              123 Address, Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

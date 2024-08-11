import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const CustomRequest = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-navbar text-center bg-gray-700 flex justify-center p-3">
        <div className="w-6/7 h-5/6 bg-gray-500 px-10 py-10 rounded-lg">
          <h3 className="text-4xl text-gray-900 m-5">Place An Order</h3>
          <input
            type="text"
            className="w-11/12 border text-base my-2.5 p-3 rounded-lg border-solid border-blue-700"
            placeholder="Enter your Full name"
          />
          <input
            type="email"
            className="w-11/12 border text-base my-2.5 p-3 rounded-lg border-solid border-blue-700"
            placeholder="Enter your Email Address"
          />
          <input
            type="text"
            className="w-11/12 border text-base my-2.5 p-3 rounded-lg border-solid border-blue-700"
            placeholder="Enter your Phone Number"
          />
          <textarea
            className=" w-11/12 border text-lg my-2.5 p-3 rounded-lg border-solid border-blue-700 font-normal box-border resize break-words mx-5"
            placeholder="Message"
          ></textarea>
          <button className="w-28 bg-gray-800 text-blue-500 text-xl cursor-pointer p-2.5 rounded-xl transform hover:scale-110 transition hover:bg-gray-600">
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomRequest;

import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="text-center bg-pink-200 flex justify-center p-4">
      <div className="w-6/7 h-5/6 bg-white px-10 py-10 rounded-xl">
        <h1 className="flex justify-center text-4xl font-bold">Sign Up</h1>
        <div className="flex flex-col gap-5 m-5">
          <input
            type="text"
            className="h-16 w-full border rounded-xl text-black text-xl pl-5 border-solid border-pink-700"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="h-16 w-full border rounded-xl text-black text-xl pl-5 border-solid border-pink-700"
            placeholder="Your Email Address"
          />
          <input
            type="password"
            className="h-16 w-full border rounded-xl text-black text-xl pl-5 border-solid border-pink-700"
            placeholder="Your Password"
          />
        </div>
        <div className="flex items-center gap-5 text-gray-700 text-lg font-medium mt-4">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use of privacy policy</p>
        </div>
        <button className="w-28 h-16 bg-pink-400 text-2xl font-medium cursor-pointer mt-5 border rounded-2xl transform hover:scale-110 transition duration-[600ms] hover:bg-pink-700">
          <Link to="/">Continue</Link>
        </button>
        <div className="text-xl flex flex-row justify-between mt-5 text-gray-800 font-medium">
          <p>Already have an account?</p>
          <span className="bg-pink-400 border rounded-xl w-32 h-9 transform hover:scale-110 transition duration-[600ms] hover:bg-pink-700">
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

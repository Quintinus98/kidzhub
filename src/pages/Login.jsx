import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="text-center bg-pink-200 flex justify-center p-7 min-h-screen">
      <div className=" bg-white px-10 py-20 rounded-xl">
        <h1 className="flex justify-center text-4xl font-bold">
          Login to Your Account
        </h1>
        <div className="flex flex-col gap-7 m-5">
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
        <div className="flex flex-row items-end justify-between">
          <button className="bg-pink-400 border rounded-xl w-36 h-11 transform hover:scale-110 transition duration-[600ms] hover:bg-pink-700">
            <Link style={{ textDecoration: 'none' }} to="/password">
              Forgot Password?
            </Link>{' '}
          </button>
          <button className="bg-pink-400 border rounded-xl w-32 h-10 transform hover:scale-110 transition duration-[600ms] hover:bg-pink-700 font-medium">
            <Link style={{ textDecoration: 'none' }} to="/">
              Continue
            </Link>
          </button>
        </div>
        <div className="text-xl flex flex-row justify-between mt-5 gap-3 text-gray-800 font-medium">
          <p>New to KidzHub?</p>
          <span className="bg-pink-300 border rounded-xl w-60 h-11 transform hover:scale-110 transition duration-[600ms] hover:bg-pink-700">
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

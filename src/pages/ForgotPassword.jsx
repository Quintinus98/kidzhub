import React from 'react';
// import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div
      className="text-center bg-pink-200 flex justify-center p-7 min-h-screen items-center flex-wrap box-border;
 "
    >
      <div
        className="bg-white rounded-xl flex flex-row justify-between items-center min-h-96 p-5 rounded-xl;
  "
      >
        <div className="flex-1 flex justify-center flex-col leading-normal p-5">
          <h1 className="text-5xl text-purple-700 mb-5">
            Kidzhub Password Reset
          </h1>
          <p className="text-xl text-black">
            Enter your email address and a link will be sent to your email.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center p-5">
          <h2 className="text-3xl text-purple-700 mb-5">Forgot Password</h2>
          <form className="flex flex-col">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email Address"
              className="text-base border mb-5 p-4 rounded-xl border-solid border-pink-800"
            />
            <button
              type="submit"
              className="text-2xl bg-purple-400 text-black cursor-pointer transform hover:scale-110 transition duration-[600ms] p-4 rounded-2xl border w-92 hover:bg-purple-700"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

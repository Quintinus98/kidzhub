import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center gap-5 dark:bg-gray-800">
      <h1 className="text-blue-800 text-4xl font-semibold text-center">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-purple-600 text-xl text-center">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between w-4/5 h-16 border rounded-[80px] border-solid border-[#e3e3e3] bg-white">
        <input
          type="email"
          placeholder="Your Email Id"
          className=" text-black text-lg ml-5"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        />
        <button className="w-13 h-16 mr-4 text-blue-600 text-lg cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

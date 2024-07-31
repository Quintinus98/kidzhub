import React from 'react';
// import './Hero.css';
import Img2 from '../../assets/web_new.jpg';
import arrow from '../../assets/arrow.png';

const Hero = () => {
  return (
    <div className=" flex md:flex-row flex-col items-center w-full md:h-screen mt-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
      <div className="md:flex-1 flex justify-center md:justify-start flex-col px-4">
        <h2 className="text-red-600 text-5xl font-semibold text-center md:text-left">
          NEW ARRIVALS ONLY
        </h2>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-blue-600 text-4xl font-bold text-center md:text-left">
            New collection
          </p>
          <p className="text-blue-600 text-4xl font-bold text-center md:text-left">
            For everyone
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4 w-72 h-14 text-2xl  my-8 rounded-full text-white bg-blue-700 outline-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <div>Latest Collection</div>
            <img src={arrow} alt="arrow" className="h-12 max-w-full" />
          </div>
        </div>
      </div>
      <div className="md:flex-1 flex justify-center items-center mb-4 md:mb-0">
        <img
          src={Img2}
          alt="hero"
          className="h-72 w-72 md:h-96 md:w-96 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;

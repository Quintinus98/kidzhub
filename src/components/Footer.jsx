import React from 'react';
import IMG from '../assets/IMG1.png';
// import IMG from '../assets/loo.jpg';
import facebook_logo from '../assets/facebook_logo.jpeg';
import insta_logo from '../assets/insta_logo.png';
import whatsapp_logo from '../assets/whatsapp_logo.png';
import twitter_logo from '../assets/twitter_logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
      <div className="flex items-center gap-5 m-7 justify-center">
        <Link style={{ textDecoration: 'none' }} to="/">
          <img src={IMG} alt="" className="h-20 rounded-xl" />
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/">
          <p className="self-baseline text-5xl font-semibold  dark:text-white">
            Kidzhub
          </p>
        </Link>
      </div>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
        <div className=" grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12 flex justify-evenly">
          <div>
            <p className="text-base text-gray-500">Company</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base text-gray-500">Help</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Delivery Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base text-gray-500">Extra Links</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Delivery Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-1">
            <Link style={{ textDecoration: 'none' }} to="/">
              <img src={IMG} alt="" className="h-12 rounded-lg" />
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
              <p className="self-baseline text-2xl font-semibold  dark:text-white">
                Kidzhub
              </p>
            </Link>
          </div>
          <ul className="flex items-center space-x-3 md:order-3">
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <img
                  src={whatsapp_logo}
                  alt=""
                  className="h-6 w-6 rounded-lg"
                />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <img
                  src={facebook_logo}
                  alt=""
                  className="h-6 w-6 rounded-lg"
                />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <img src={insta_logo} alt="" className="h-6 w-6 rounded-lg" />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <img src={twitter_logo} alt="" className="h-6 w-6 rounded-lg" />
              </a>
            </li>
          </ul>

          <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
            © Copyright 2024, All Rights Reserved by Kidzhub
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

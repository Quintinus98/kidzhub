import React from 'react';
// import IMG from '../../assets/IMG1.png';
import IMG from '../assets/loo.jpg';
import facebook_logo from '../assets/facebook_logo.jpg';
import insta_logo from '../assets/insta.jpg';
import whatsapp_logo from '../assets/whatsapp_logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className=" dark:bg-gray-700 flex flex-col justify-center items-center gap-10">
      <div className="flex items-center gap-5 mt-5">
        <Link style={{ textDecoration: 'none' }} to="/">
          <img src={IMG} alt="" className="h-20 rounded-lg" />
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/">
          <p className="self-baseline text-4xl font-semibold whitespace-nowrap dark:text-white">
            Deonwearables
          </p>
        </Link>
      </div>
      <ul
        className="flex gap-9 text-white text-xl"
        style={{ textDecoration: 'none' }}
      >
        <li className="cursor-pointer hover:scale-110 transition-transform duration-600 hover:text-blue-600">
          Company
        </li>
        <li className="cursor-pointer hover:scale-110 transition-transform duration-600 hover:text-blue-600">
          About
        </li>
        <li className="cursor-pointer hover:scale-110 transition-transform duration-600 hover:text-blue-600">
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
      <div className="flex flex-row gap-5">
        <div className="pb-1.5 p-2.5 border-solid border-[#ebebeb]">
          <img
            src={insta_logo}
            alt="inst"
            className="hover:scale-110 transition-transform duration-600 h-14 rounded-lg"
          />
        </div>
        <div className="pb-1.5 p-2.5 border-solid border-[#ebebeb]">
          <img
            src={facebook_logo}
            alt="facebook"
            className="hover:scale-110 transition-transform duration-600 h-14 rounded-lg"
          />
        </div>
        <div className="pb-1.5 p-2.5 border-solid border-[#ebebeb]">
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp_logo}
              alt="whatsapp"
              className="hover:scale-110 transition-transform duration-600 h-14 rounded-lg"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 w-full text-white text-xl mb-10">
        <hr className="w-4/5 h-4" />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

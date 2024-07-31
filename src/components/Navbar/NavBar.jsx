import React, { useContext, useEffect, useState } from 'react';
// import './NavBar.css';
import { Link } from 'react-router-dom';
// import IMG1 from '../../assets/IMG1.png';
import { ShopContext } from '../ShopContext';
import IMG1 from '../../assets/loo.jpg';

const NavBar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleWindowSizeChange = () => {
    if (window.innerWidth >= 768) {
      setDropdownVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    handleWindowSizeChange();
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={IMG1} className="h-20 rounded-lg" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
            Deonwearables
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/request">
            <button
              type="button"
              className="text-white bg-blue-700 outline-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Make a Custom request
            </button>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isDropdownVisible}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {isDropdownVisible && (
          <div className="absolute top-full end-0 w-40  bg-white text-white dark:bg-gray-800 ">
            <ul className="flex flex-col p-4 space-y-4 font-lg">
              <li>
                <Link
                  to="/"
                  className=" hover:text-blue-700 md:hover:bg-transparent"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/boys"
                  className=" hover:text-blue-700 md:hover:bg-transparent"
                >
                  Boys
                </Link>
              </li>
              <li>
                <Link
                  to="/girls"
                  className=" hover:text-blue-700 md:hover:bg-transparent"
                >
                  Girls
                </Link>
              </li>
              <li>
                <Link
                  to="/casuals"
                  className=" hover:text-blue-700 md:hover:bg-transparent"
                >
                  Casuals
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className=" hover:text-blue-700 md:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <div className="relative py-2">
                    <div className="t-0 absolute left-3">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        {getTotalCartItems()}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="file: mt-4 h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="text-xl items-center flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li onClick={() => setMenu('Shop')}>
              <Link
                to={'/'}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${menu === 'Shop' ? 'text-blue-700' : ''}`}
              >
                Shop
              </Link>
            </li>
            <li
              onClick={() => setMenu('Boys')}
              className={menu === 'Boys' ? 'text-blue-700' : ''}
            >
              <Link
                to={'/boys'}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${menu === 'Boys' ? 'text-blue-700' : ''}`}
              >
                Boys
              </Link>
            </li>
            <li
              onClick={() => setMenu('Girls')}
              className={menu === 'Girls' ? 'text-blue-700' : ''}
            >
              <Link
                to={'/girls'}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${menu === 'Girls' ? 'text-blue-700' : ''}`}
              >
                Girls
              </Link>
            </li>
            <li
              onClick={() => setMenu('Casuals')}
              className={menu === 'Casuals' ? 'text-blue-700' : ''}
            >
              <Link
                to={'/casuals'}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${menu === 'Casuals' ? 'text-blue-700' : ''}`}
              >
                Casuals
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/login">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 py-1 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <div className="relative py-2">
                  <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      {getTotalCartItems()}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="file: mt-4 h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

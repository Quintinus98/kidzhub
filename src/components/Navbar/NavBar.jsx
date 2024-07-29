import React, { useContext, useEffect, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import IMG1 from '../../assets/IMG1.png';
import cart from '../../assets/cart.png';
import { ShopContext } from '../ShopContext';

const NavBar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const [sideBarVisible, setSideBarVisible] = useState(true);

  const toggleSidebar = () => {
    setSideBarVisible(!sideBarVisible);
  
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setSideBarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sideBarVisible ? "Close" : "Menu"}
      </button>
        <div className="nav-logo">
          <img src={IMG1} alt="" />
          <p>KIDZHUB</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu('shop');
            }}
          >
            <Link style={{ textDecoration: 'none' }} to="/">
              Shop
            </Link>{' '}
            {menu === 'shop' ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu('boys');
            }}
          >
            <Link style={{ textDecoration: 'none' }} to="/boys">
              Boys
            </Link>
            {menu === 'boys' ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu('girls');
            }}
          >
            <Link style={{ textDecoration: 'none' }} to="/girls">
              Girls
            </Link>
            {menu === 'girls' ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu('casuals');
            }}
          >
            {' '}
            <Link style={{ textDecoration: 'none' }} to="/casuals">
              Casuals
            </Link>
            {menu === 'casuals' ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link style={{ textDecoration: 'none' }} to="/login">
            <button>login</button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/profile">
            <button>Profile</button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/cart">
            <img src={cart} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        <div className="customrequest">
          <Link style={{ textDecoration: 'none' }} to="/request">
            Make a Custom Request
          </Link>
        </div>
    </div>
  );
};
};

export default NavBar;

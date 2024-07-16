import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../../assets/arrow-icon.png';
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {
  const { product } = props;
  const getLink = (category) => {
    switch (category.toLowerCase()) {
      case 'boys':
        return '/boys';
      case 'girls':
        return '/girls';
      case 'casuals':
        return '/casuals';
    }
  };

  return (
    <div className="breadcrum">
      <Link style={{ textDecoration: 'none' }} to="/">
        HOME
      </Link>
      <img src={arrow_icon} alt="" />
      <Link style={{ textDecoration: 'none' }} to="/">
        SHOP
      </Link>
      <img src={arrow_icon} alt="" />
      <Link style={{ textDecoration: 'none' }} to={getLink(product.category)}>
        {product.category}
      </Link>
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;

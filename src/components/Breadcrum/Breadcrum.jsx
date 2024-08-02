import React from 'react';
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
    <div className="flex items-center gap-3 text-white font-semibold mx-4">
      <Link style={{ textDecoration: 'none' }} to="/">
        HOME
      </Link>
      <img src={arrow_icon} alt="" className=" h-5 w-5" />
      <Link style={{ textDecoration: 'none' }} to="/">
        SHOP
      </Link>
      <img src={arrow_icon} alt="" className="h-5 w-5" />
      <Link style={{ textDecoration: 'none' }} to={getLink(product.category)}>
        {product.category}
      </Link>
      <img src={arrow_icon} alt="" className=" h-5 w-5" /> {product.name}
    </div>
  );
};

export default Breadcrum;

import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-90 transform transition-transform duration-600 hover:scale-105 ml-1">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={handleScroll}
          src={props.image}
          alt=""
          className="h-48 w-48"
        />
      </Link>
      <p className="mx-0 my-1.5 text-white">{props.name}</p>
    </div>
  );
};

export default Item;

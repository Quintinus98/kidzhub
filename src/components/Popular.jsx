import React from 'react';
import all_products from '../all_products';
import Item from './Item';

const Popular = () => {
  return (
    <div className="flex flex-col flex-wrap items-center gap-2.5 border-b border-gray-200 dark:bg-gray-800 mt-navbar">
      <h1 className="text-white text-5xl font-semibold text-center md:text-left m-8">
        POPULAR IN KIDZHUB
      </h1>
      <hr
        className="w-full h-4
  bg-grey"
      />
      <div
        className="flex gap-10 flex-wrap items-center justify-center mt-20;
"
      >
        {all_products.map((item, i) => {
          return (
            <Item key={i} id={item.id} name={item.name} image={item.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;

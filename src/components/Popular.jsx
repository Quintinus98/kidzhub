import React from 'react';
import data_product from '../data';
import Item from './Item';

const Popular = () => {
  return (
    <div className="flex flex-col flex-wrap items-center gap-2.5  border-b border-gray-200 dark:bg-gray-700">
      <h1 className="text-white text-5xl font-semibold text-center md:text-left mt-10">
        POPULAR IN KIDZHUB
      </h1>
      <hr
        className="w-4/5 h-4
  bg-grey"
      />
      <div
        className="flex gap-10 flex-wrap items-center justify-center mt-20;
"
      >
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;

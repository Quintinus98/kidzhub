import React from 'react';
// import './ShopCategory.css';
import { useContext } from 'react';
import Item from './Item';
import NavBar from './NavBar';
import Footer from './Footer';
import { ShopContext } from './ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <NavBar />
      <div className="shop-category">
        <div
          className="flex gap-y-5 flex-wrap items-center justify-center ml-10 m-5;
"
        >
          {all_product.map((item, i) => {
            if (props.category === item.category) {
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopCategory;

import React from 'react';
import './ShopCategory.css';
import { useContext } from 'react';
import Item from '../../components/Items/Item';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import { ShopContext } from '../ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <NavBar />
      <div className="shop-category">
        <div className="shopCategory-products">
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
        <div className="shopCategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopCategory;

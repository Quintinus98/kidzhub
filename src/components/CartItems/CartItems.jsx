import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../ShopContext';
import remove_icon from '../../assets/remove_icon.png';
import { Link } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  const totalCartAmount = getTotalCartAmount();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="cartitems">
        <div className="cartitems-container">
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="cartitems-format cartitems-format-main">
                    <img
                      src={e.image}
                      alt=""
                      className="carticon-product-icon"
                    />
                    <p>{e.name}</p>
                    <p>#{e.new_price}</p>
                    <button className="cartitems-quantity">
                      {cartItems[e.id]}{' '}
                    </button>
                    <p> #{e.new_price * cartItems[e.id]} </p>
                    <div className="cartitems-remove-icon">
                      <img
                        src={remove_icon}
                        onClick={() => {
                          removeFromCart(e.id);
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1> Cart Totals</h1>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>#{totalCartAmount}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>#{totalCartAmount}</h3>
              </div>
              <button>
                <Link
                  style={{ textDecoration: 'none' }}
                  to="/checkout"
                  onClick={handleScroll}
                >
                  {' '}
                  PROCEED TO CHECKOUT
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

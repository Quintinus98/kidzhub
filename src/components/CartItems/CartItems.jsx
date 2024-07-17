import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../ShopContext';
import remove_icon from '../../assets/remove_icon.png';
import { Link } from 'react-router-dom';

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    selectedImages,
    selectedSizes,
  } = useContext(ShopContext);
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
          {all_product.map((product) => {
            if (cartItems[product.id] > 0) {
              const selectedSize = selectedSizes[product.id];
              const price = product.prices[selectedSize] || 0;
              const totalItemPrice = price * cartItems[product.id];
              return (
                <div key={product.id}>
                  <div className="cartitems-format cartitems-format-main">
                    <img
                      src={selectedImages[product.id]}
                      alt=""
                      className="carticon-product-icon"
                    />
                    <p>{product.name}</p>
                    <p>#{price}</p>
                    <button className="cartitems-quantity">
                      {cartItems[product.id]}
                    </button>
                    <p> #{totalItemPrice} </p>
                    <div className="cartitems-remove-icon">
                      <img
                        src={remove_icon}
                        onClick={() => {
                          removeFromCart(product.id);
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
              <h1> Cart Total</h1>
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
                <h3>#{totalCartAmount.toFixed(2)}</h3>
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

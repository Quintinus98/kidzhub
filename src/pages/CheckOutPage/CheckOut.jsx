import React, { useContext } from 'react';
import './CheckOut.css';
import { ShopContext } from '../../components/ShopContext';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';

const CheckOut = () => {
  const { cartItems, all_product, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div>
      <NavBar />
      <div className="checkout">
        <div className="checkout-container">
          <div className="checkout-left">
            <h2>Shipping Information</h2>
            <form className="checkout-form">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />

              <label htmlFor="address">Address</label>
              <input type="text" id="address" required />

              <label htmlFor="city">City</label>
              <input type="text" id="city" required />

              <label htmlFor="country">Country</label>
              <input type="text" id="country" required />
            </form>
          </div>
          <div className="checkout-right">
            <h2>Order Summary</h2>
            <div className="checkout-items">
              {all_product.map((item) => {
                if (cartItems[item.id] > 0) {
                  return (
                    <div key={item.id} className="checkout-item">
                      <p>
                        {item.name} x {cartItems[item.id]}
                      </p>
                      <p>#{item.new_price * cartItems[item.id]}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="checkout-total">
              <p>Total: #{getTotalCartAmount()}</p>
            </div>
            <h2>Payment Information</h2>
            <form className="checkout-form">
              <label htmlFor="cardname">Name on Card</label>
              <input type="text" id="cardname" required />

              <label htmlFor="cardnumber">Card Number</label>
              <input type="text" id="cardnumber" required />

              <label htmlFor="expiry">Expiry Date</label>
              <input type="text" id="expiry" required />

              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" required />
            </form>
            <button type="submit" className="checkout-button">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;

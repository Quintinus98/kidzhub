import React, { useContext } from 'react';
import './Cart.css';
import CartItems from '../CartItems/CartItems';
import { ShopContext } from '../ShopContext';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const isEmptyCart = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );
  return (
    <div>
      <NavBar />
      {isEmptyCart ? (
        <div className="empty-cart">
          <h2>Nothing added to cart. Start shopping!</h2>
        </div>
      ) : (
        <CartItems />
      )}
      <Footer />
    </div>
  );
};

export default Cart;

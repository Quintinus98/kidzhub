import React, { useContext } from 'react';
import CartItems from './CartItems';
import { ShopContext } from './ShopContext';
import NavBar from './NavBar';
import Footer from './Footer';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const isEmptyCart = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );
  return (
    <div>
      <NavBar />
      {isEmptyCart ? (
        <div className="mt-navbar dark:bg-gray-700 border-b ">
          <h2 className="font-extrabold text-lg mb-5">
            Nothing added to cart. Start shopping!
          </h2>
        </div>
      ) : (
        <CartItems />
      )}
      <Footer />
    </div>
  );
};

export default Cart;

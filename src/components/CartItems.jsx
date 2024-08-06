import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import remove_icon from '../assets/remove_icon.png';
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
      <div className="m-24 mt-navbar">
        <div className="flex flex-wrap flex-row flex-1 ">
          <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-10 text-gray-700 text-lg font-semibold py-5">
            <p className="text-xl font-semibold">Products</p>
            <p className="text-xl font-semibold">Title</p>
            <p className="text-xl font-semibold">Price</p>
            <p className="text-xl font-semibold">Quantity</p>
            <p className="text-xl font-semibold">Total</p>
            <p className="text-xl font-semibold">Remove</p>
          </div>
          <hr className="h-2  bg-gray-800" />
          {all_product.map((product) => {
            if (cartItems[product.id] > 0) {
              const selectedSize = selectedSizes[product.id];
              const price = product.prices[selectedSize] || 0;
              const totalItemPrice = price * cartItems[product.id];
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-10 text-gray-700 text-lg font-semibold py-5">
                    <img
                      src={selectedImages[product.id]}
                      alt=""
                      className="h-28"
                    />
                    <p>{product.name}</p>
                    <p>#{price}</p>
                    <button className="w-16 h-12 border-2 border-solid border-gray-200 bg-white">
                      {cartItems[product.id]}
                    </button>
                    <p> #{totalItemPrice} </p>
                    <div className="w-4 cursor-pointer mx-10">
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
          <div className="flex justify-center flex-1 flex-wrap flex-row my-24 bg-gray-600 rounded-md ">
            <div className="flex-1 flex flex-col gap-8 m-20">
              <h1 className="text-3xl text-white"> Cart Total</h1>
              <div className="flex justify-between  py-4 text-xl text-white">
                <p>Subtotal</p>
                <p>#{totalCartAmount}</p>
              </div>
              <hr />
              <div className="flex justify-between py-4 text-xl text-white">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="flex justify-between py-4 text-xl text-white">
                <h3>Total</h3>
                <h3>#{totalCartAmount.toFixed(2)}</h3>
              </div>
              <button className="w-80 h-16 flex flex-col self-center items-center justify-center text-blue-500 font-bold text-2xl cursor-pointer rounded-lg border border-red-800 bg-gray-300 hover:bg-gray-800">
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

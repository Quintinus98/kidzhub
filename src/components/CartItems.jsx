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
      <div className="mx-[150px] my-[100px]">
        <div className="flex flex-wrap flex-row flex-1 m-2.5">
          <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] text-[#454545] text-lg font-semibold px-0 py-5">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr className="h-[3px] border-0 bg-#2e2e2e" />
          {all_product.map((product) => {
            if (cartItems[product.id] > 0) {
              const selectedSize = selectedSizes[product.id];
              const price = product.prices[selectedSize] || 0;
              const totalItemPrice = price * cartItems[product.id];
              return (
                <div key={product.id}>
                  <div className="text-[17px] grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] text-[#454545] text-lg font-semibold px-0 py-5">
                    <img
                      src={selectedImages[product.id]}
                      alt=""
                      className="h-[150px] w-[130px]"
                    />
                    <p>{product.name}</p>
                    <p>#{price}</p>
                    <button className="w-16 h-[50px] border-2 border-solid border-[#ebebeb] bg-#fff">
                      {cartItems[product.id]}
                    </button>
                    <p> #{totalItemPrice} </p>
                    <div className="w-[15px] cursor-pointer mx-10 my-0">
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
          <div className="flex justify-center flex-1 flex-wrap flex-row mx-0 my-[100px]">
            <div className="flex-1 flex flex-col gap-10 mr-[200px]">
              <h1> Cart Total</h1>
              <div className="flex justify-between px-0 py-[15px]">
                <p>Subtotal</p>
                <p>#{totalCartAmount}</p>
              </div>
              <hr />
              <div className="flex justify-between px-0 py-[15px]">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="flex justify-between px-0 py-[15px]">
                <h3>Total</h3>
                <h3>#{totalCartAmount.toFixed(2)}</h3>
              </div>
              <button className="w-[262px] h-[58px] text-white font-semibold cursor-pointer border-[none] outline-none bg-#ff5a5a">
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

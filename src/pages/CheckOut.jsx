import React, { useContext } from 'react';
// import './CheckOut.css';
import { ShopContext } from '../components/ShopContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CheckOut = () => {
  const { cartItems, all_product, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center flex-wrap box-border p-5 bg-pink-100 mt-navbar">
        <div className="flex flex-row justify-between items-center max-w-3xl p-5 rounded-lg bg-white">
          <div className="flex-1 flex justify-center flex-col p-5">
            <h2 className="text-3xl flex flex-col justify-center font-extrabold">
              Shipping Information
            </h2>
            <form className="flex flex-col mt-5">
              <label
                htmlFor="name"
                className="font-bold text-gray-600 mb-3 text-lg"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600"
              />

              <label
                htmlFor="address"
                className="font-bold text-gray-600 mb-3 text-lg"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                required
                className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600"
              />

              <label
                htmlFor="city"
                className="font-bold text-gray-600 mb-3 text-lg"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                required
                className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600"
              />

              <label
                htmlFor="country"
                className="font-bold text-gray-600 mb-3 text-lg"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                required
                className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600"
              />
            </form>
          </div>
          <div className="flex-1 flex justify-center flex-col p-5">
            <div className="text-2xl text-right font-semibold mb-10">
              <p>Total Price: #{getTotalCartAmount()}</p>
            </div>
            <h2 className="text-2xl font-bold p-5">Payment Information</h2>
            <form className="flex flex-col mt-5">
              <label
                htmlFor="cardname"
                className="font-bold text-gray-600 mb-3 text-lg"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="cardname"
                required
                className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600"
              />

              <label
                htmlFor="cardnumber"
                className="font-bold text-gray-600 mb-3 text-lg"
              >
                Card Number{' '}
              </label>
              <input
                type="text"
                id="cardnumber"
                required
                className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600"
              />

              <label
                htmlFor="expiry"
                className="font-bold text-gray-600 mb-3 text-lg"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                required
                className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600"
              />

              <label
                htmlFor="cvv"
                className="font-bold text-gray-600 mb-3 text-lg"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                required
                className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600"
              />
            </form>
            <button
              type="submit"
              className="w-80 h-16 flex flex-col self-center items-center justify-center text-black font-bold text-2xl cursor-pointer rounded-lg border border-purple-800 bg-purple-300 hover:bg-purple-500"
            >
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

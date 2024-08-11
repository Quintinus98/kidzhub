import React, { useContext } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import profile from '../assets/profile.jpg';
import CountryCodeDropdown from '../CountryCodeDropdown';
import { ShopContext } from './ShopContext';

const ProfilePage = () => {
  const {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    selectedImage,
    countryCode1,
    setCountryCode1,
    countryCode2,
    setCountryCode2,
    handleFileChange,
    phoneNumber1,
    setPhoneNumber1,
    phoneNumber2,
    setPhoneNumber2,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
  } = useContext(ShopContext);
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center flex-wrap box-border p-5 bg-pink-100 mt-navbar gap-3">
        <div className="flex w-full justify-center flex-wrap gap-3">
          <div className="flex flex-grow flex-row justify-between items-stretch p-4 rounded-lg bg-white border-double border-4 border-blue-800 min-h-64">
            <div className="flex flex-grow flex-col justify-between">
              <h2 className="text-2xl flex flex-col justify-center font-bold self-center items-center">
                Account Overview
              </h2>
              <hr className="border-t-3 border-gray-900 mb-5 mt-1" />
              <img
                className="w-32 h-32 object-cover rounded-full self-center"
                src={selectedImage || profile}
                alt="Profile"
              />
              <div className="flex gap-2">
                <h1 className="mt-4 text-xl font-semibold text-gray-900">
                  {firstname || 'John'}
                </h1>
                <h1 className="mt-4 text-xl font-semibold text-gray-900">
                  {lastname || 'Doe'}
                </h1>
              </div>
              <h1 className="mt-4 text-xl font-semibold text-gray-900">
                {email || 'Johndoe@awesomeness.com'}
              </h1>
            </div>
          </div>
          <div className="flex flex-grow flex-row justify-between items-stretch p-4 rounded-lg bg-white border-double border-4 border-blue-800 min-h-64">
            <div className="flex flex-grow flex-col justify-between p-4">
              <h2 className=" flex flex-col justify-center font-bold text-4xl self-center items-center">
                Address Book
              </h2>
              <hr className="border-t-3 border-gray-900 mb-5 mt-1" />
              <h1 className="mt-2 text-xl font-semibold text-gray-900">
                Your default shipping address:
              </h1>
              <h1 className="mt-2 text-xl font-semibold text-gray-900">
                {address || '123 Address,'} {city || 'Somewhere on Earth,'}{' '}
                {state || 'Universe.'}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap box-border bg-pink-100 mt-8 w-full rounded-lg  border-solid border-4 border-blue-800">
          <div className="flex flex-grow flex-row justify-between items-stretch p-4 rounded-lg bg-white  min-h-64">
            <div className="flex flex-grow flex-col justify-between">
              <h2 className="text-4xl flex flex-col self-center items-center justify-center font-bold m-3">
                Edit Account Overview
              </h2>
              <form className="flex flex-col mt-6">
                <div className="flex gap-3 mt-3">
                  <div className="flex flex-1 flex-col relative">
                    <label
                      htmlFor="firstname"
                      className="font-bold text-gray-600 mb-3 text-xl bg-white absolute translate-y-3 translate-x-4  left-2.5 bottom-16"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                      className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600"
                    />
                  </div>
                  <div className="flex flex-1 flex-col relative">
                    <label
                      htmlFor="lastname"
                      className="font-bold text-gray-600 mb-3 text-xl bg-white absolute translate-y-3 translate-x-4  left-2.5 bottom-16"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      required
                      className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600 text-base w-full px-3 py-4"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col relative">
                  <label
                    htmlFor="email"
                    className="font-bold text-gray-600 mb-3 text-xl bg-white absolute translate-y-3 translate-x-4  left-2.5 bottom-16"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600 text-base w-full px-3 py-4"
                  />
                </div>
                <button
                  onChange={handleFileChange}
                  id="photo"
                  className="text-xl py-0 flex m-3 "
                >
                  Upload photo
                  <input type="file" />
                </button>
              </form>
              <button
                type="submit"
                className="w-36 h-16 flex flex-col self-end items-center justify-center text-black font-bold text-2xl cursor-pointer rounded-lg border border-purple-800 bg-purple-300 hover:bg-purple-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap box-border bg-pink-100 mt-8 w-full rounded-lg  border-solid border-4 border-blue-800">
          <div className="flex flex-grow flex-row justify-between items-stretch p-4 rounded-lg bg-white  min-h-64">
            <div className="flex flex-grow flex-col justify-between">
              <h2 className="text-4xl flex flex-col self-center items-center justify-center font-bold m-3">
                Edit Address
              </h2>
              <form className="flex flex-col mt-6">
                <div className="flex gap-3 mt-3">
                  <div className="flex items-center relative">
                    <CountryCodeDropdown
                      id="countryCode1"
                      value={countryCode1}
                      onChange={(e) => setCountryCode1(e.target.value)}
                      className="text-md p-2 rounded-l-lg w-15  border-purple-600"
                    />
                  </div>
                  <div className="flex flex-1 flex-col relative">
                    <label
                      htmlFor="number"
                      className="font-bold text-gray-600 mb-3 text-xl sm:text-lg bg-white absolute translate-y-3 translate-x-4  left-2.5 bottom-16"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="number1"
                      value={phoneNumber1}
                      onChange={(e) => setPhoneNumber1(e.target.value)}
                      required
                      className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600 text-base w-full px-3 py-4"
                    />
                  </div>
                  <div className="flex items-center relative">
                    <CountryCodeDropdown
                      id="countryCode2"
                      value={countryCode2}
                      onChange={(e) => setCountryCode2(e.target.value)}
                      className="text-md p-2 rounded-l-lg w-15  border-purple-600"
                    />
                  </div>
                  <div className="flex flex-1 flex-col relative">
                    <label
                      htmlFor="number"
                      className="font-bold text-gray-600 mb-3 text-xl sm:text-base bg-white absolute translate-y-3 translate-x-4  left-2.5 bottom-16"
                    >
                      Additional Phone Number
                    </label>
                    <input
                      type="text"
                      id="number2"
                      value={phoneNumber2}
                      onChange={(e) => setPhoneNumber2(e.target.value)}
                      required
                      className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600 text-base w-full px-3 py-4"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col relative mt-3">
                  <label
                    htmlFor="address"
                    className="font-bold text-gray-600 mb-3 text-xl bg-white absolute translate-y-3 translate-x-4  left-2.5 bottom-16"
                  >
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600 text-base w-full px-3 py-4"
                  />
                </div>
                <div className="flex flex-1 flex-col relative mt-3">
                  <label
                    htmlFor="address"
                    className="font-bold text-gray-600 mb-3 text-xl bg-white absolute translate-y-3 translate-x-4  left-2.5 bottom-16"
                  >
                    Additional Information
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600 text-base w-full px-3 py-4"
                  />
                </div>
                <div className="flex gap-3 mt-3">
                  <div className="flex flex-1 flex-col relative">
                    <label
                      htmlFor="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="font-bold text-gray-600 mb-3 text-xl bg-white absolute translate-y-3 translate-x-4  left-2.5 bottom-16"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      required
                      className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600 text-base w-full px-3 py-4"
                    />
                  </div>
                  <div className="flex flex-1 flex-col relative">
                    <label
                      htmlFor="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="font-bold text-gray-600 mb-3 text-xl bg-white absolute translate-y-3 translate-x-4  left-2.5 bottom-16"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      required
                      className="text-md border mb-5 p-4 rounded-lg border-solid border-purple-600 text-base w-full px-3 py-4"
                    />
                  </div>
                </div>
              </form>
              <button
                type="submit"
                className="w-36 h-16 flex flex-col self-end items-center justify-center text-black font-bold text-2xl cursor-pointer rounded-lg border border-purple-800 bg-purple-300 hover:bg-purple-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;

import React, { createContext, useEffect, useState } from 'react';
import all_products from '../all_products';

export const ShopContext = createContext(null);

const ShopProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [selectedImages, setSelectedImages] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});

  const updateSelectedSize = (itemId, size) => {
    setSelectedSizes((prev) => ({
      ...selectedSizes,
      [itemId]: size,
    }));
  };

  const [all_product, setAllProduct] = useState([]);

  useEffect(() => {
    setAllProduct(all_products);
  }, []);

  const addToCart = (productId, size, image) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    setSelectedImages((prev) => ({
      ...prev,
      [productId]: image,
    }));
    updateSelectedSize(productId, size);
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
    setSelectedImages((prev) => {
      const updatedImages = { ...prev };
      if (!updatedImages[productId]) return prev;
      delete updatedImages[productId];
      return updatedImages;
    });
    setSelectedSizes((prev) => {
      const updatedSizes = { ...prev };
      if (!updatedSizes[productId]) return prev;
      delete updatedSizes[productId];
      return updatedSizes;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const item = all_product.find(
        (product) => product.id === parseInt(itemId)
      );
      if (item && selectedSizes[itemId]) {
        const selectedSize = selectedSizes[itemId];
        const price = item.prices[selectedSize];
        if (price) {
          totalAmount += price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber1, setPhoneNumber1] = useState('');
  const [phoneNumber2, setPhoneNumber2] = useState('');
  const [countryCode1, setCountryCode1] = useState('+234');
  const [countryCode2, setCountryCode2] = useState('+234');
  const [selectedImage, setSelectedImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    selectedImages,
    selectedSizes,
    updateSelectedSize,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
    phoneNumber1,
    setPhoneNumber1,
    phoneNumber2,
    setPhoneNumber2,
    countryCode1,
    setCountryCode1,
    countryCode2,
    setCountryCode2,
    selectedImage,
    handleFileChange,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

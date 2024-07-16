import React, { createContext, useEffect, useState } from 'react';
import all_products from '../all_products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [all_product, setAllProduct] = useState([]);
  useEffect(() => {
    setAllProduct(all_products);
  }, []);

  const addToCart = (id) => {
    // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      if (newCartItems[id]) {
        newCartItems[id] += 1;
      } else {
        newCartItems[id] = 1;
      }
      return newCartItems;
    });
  };

  const removeFromCart = (id) => {
    // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      if (newCartItems[id] > 1) {
        newCartItems[id] -= 1;
      } else {
        delete newCartItems[id];
      }
      return newCartItems;
    });
  };

  const getTotalCartAmount = () => {
    // let totalAmount = 0;
    // for (const item in cartItems) {
    //   if (cartItems[item] > 0) {
    //     let itemInfo = all_product.find(
    //       (product) => product.id === Number(item)
    //     );
    //     totalAmount += itemInfo.new_price * cartItems[item];
    //   }
    //   return totalAmount;
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const item = all_product.find(
        (product) => product.id === parseInt(itemId)
      );
      if (item) {
        totalAmount += item.new_price * cartItems[itemId];
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

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

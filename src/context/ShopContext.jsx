import React, { createContext, useEffect, useState } from 'react';
import './ShopContext.css';
import all_products from '../all_products';

export const ShopContext = createContext(); 

const ShopProvider = ({children})=>{
    const [all_product, setAllProduct] = useState([]);
    useEffect(()=>{
        setAllProduct(all_products);
    }, []);

    return (
        <ShopContext.Provider value={{all_product}}>
            {children}
        </ShopContext.Provider>

    );
};

export default ShopProvider;

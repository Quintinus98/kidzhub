import React, { createContext } from 'react';
import './ShopContext.css';
import all_products from '../all_products';

export const ShopContext = createContext() 

const ShopContextProvider = (props)=>{
    const contextValue = {all_products};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;

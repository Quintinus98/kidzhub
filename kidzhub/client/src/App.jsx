import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Homepage from "../src/pages/HomePage";
import ShopCategory from './components/ShopCategory/ShopCategory';
import Product from "../src/components/Product";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Cart from "../src/components/Cart";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={ <Homepage/>} />
      <Route path="/boys" element={ <ShopCategory category="boys" />} />
      <Route path="/girls" element={ <ShopCategory category="girls" />} />
      <Route path="/casuals" element={ <ShopCategory category="casuals" />} />
      <Route path="/product" element={<Product />}>
        <Route path=':productId' element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
    </div>
  );
}

export default App;
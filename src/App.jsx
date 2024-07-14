import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ShopCategory from './components/ShopCategory/ShopCategory';
import Product from "./components/Product/Product";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Cart from "./components/Cart/Cart";
import ContactPage from './pages/ContactPage/ContactPage';
import ShopProvider from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={ <Homepage/>} />
        <Route path="/boys" element={ <ShopCategory category="boys" />} />
        <Route path="/girls" element={ <ShopCategory category="girls" />} />
        <Route path="/casuals" element={ <ShopCategory category="casuals" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </ShopProvider>
  );
}

export default App;
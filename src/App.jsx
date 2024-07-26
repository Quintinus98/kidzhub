import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ShopCategory from './components/ShopCategory/ShopCategory';
import Product from './components/Product/Product';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Cart from './components/Cart/Cart';
import ContactPage from './pages/ContactPage/ContactPage';
import ShopProvider from './components/ShopContext';
import CustomRequest from './components/CustomRequest/CustomRequest';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import CheckOut from './pages/CheckOutPage/CheckOut';
import AdminPage from './components/Admin/AdminPage';

function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/boys" element={<ShopCategory category="Boys" />} />
        <Route path="/girls" element={<ShopCategory category="Girls" />} />
        <Route path="/casuals" element={<ShopCategory category="Casuals" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request" element={<CustomRequest />} />
        <Route path="/password" element={<ForgotPassword />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/admin/products" element={<AdminPage />} />
      </Routes>
    </ShopProvider>
  );
}

export default App;

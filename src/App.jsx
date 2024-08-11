import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ShopCategory from './components/ShopCategory';
import Product from './components/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './components/Cart';
import ContactPage from './pages/ContactPage';
import ShopProvider from './components/ShopContext';
import CustomRequest from './components/CustomRequest';
import ForgotPassword from './pages/ForgotPassword';
import CheckOut from './pages/CheckOut';
import AdminPage from './components/Admin/AdminPage';
import ProfilePage from './components/ProfilePage';

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
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </ShopProvider>
  );
}

export default App;

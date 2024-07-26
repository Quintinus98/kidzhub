import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

export const endpoint = "http://localhost:5000"

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${endpoint}/api/v1/products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`${endpoint}/api/v1/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className='w-full px-4 sm:px-0 mx-auto'>
      <h1 className='font-bold w-full text-center text-3xl'>Admin Products Page</h1>
      <p className='text-center text-xl mt-4'>Create a Product</p>
      <ProductForm
        product={editingProduct}
      />
      <ProductList
        products={products}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
};

export default AdminPage;

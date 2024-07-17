import React, { useContext } from 'react';
import './Product.css';
import { ShopContext } from '../ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrum/Breadcrum';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import ProductDisplay from '../ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  if (!all_product || all_product.length === 0) {
    return <div>Loading...</div>;
  }
  const product = all_product.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }

  console.log('Product:', product);

  return (
    <div>
      <NavBar />
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
      </div>
      <Footer />
    </div>
  );
};

export default Product;

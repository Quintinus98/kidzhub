import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../../assets/star_icon.png';
import half_star_icon from '../../assets/half_star_icon.jpg';
import empty_star_icon from '../../assets/empty_star_icon.png';
import { ShopContext } from '../ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [mainImage, setMainImage] = useState(product?.image1 || '');
  const [selectedSize, setSelectedSize] = useState(null);
  const [reviews, setReviews] = useState(product?.reviews || []);
  const [reviewCount, setReviewCount] = useState(product?.reviews?.length || 0);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddReview = () => {
    const name = document.getElementById('review-name').value;
    const email = document.getElementById('review-email').value;
    const phone = document.getElementById('review-phone').value;
    const message = document.getElementById('review-message').value;

    if (name && email && phone && message) {
      setReviews([...reviews, { name, message }]);
      setReviewCount(reviewCount + 1);
      document.getElementById('review-name').value = '';
      document.getElementById('review-email').value = '';
      document.getElementById('review-phone').value = '';
      document.getElementById('review-message').value = '';
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img
              src={product.image1}
              alt=""
              onClick={() => handleImageClick(product.image1)}
            />
            <img
              src={product.image2}
              alt=""
              onClick={() => handleImageClick(product.image2)}
            />
            <img
              src={product.image3}
              alt=""
              onClick={() => handleImageClick(product.image3)}
            />
            <img
              src={product.image4}
              alt=""
              onClick={() => handleImageClick(product.image4)}
            />
          </div>
          <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={mainImage} alt="" />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={half_star_icon} alt="" />
            <img src={empty_star_icon} alt="" />
            <p>({reviewCount})</p>
          </div>
          <div className="productdisplay-right-price-new">
            {selectedSize
              ? `#${product.prices[selectedSize]}`
              : 'Select a size to see the price'}
          </div>
          <div className="productdisplay-right-description">
            {product.description}
          </div>
          <p className="productdisplay-right-category">
            <span>Category :</span> {product.category}
          </p>
          <p className="productdisplay-right-category">
            <span>Tags :</span> {product.tag}
          </p>
          <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-sizes">
              {product.prices &&
                Object.keys(product.prices).map((size) => (
                  <button key={size} onClick={() => handleSizeSelect(size)}>
                    {size}
                  </button>
                ))}
            </div>
          </div>
          <div className="productdisplay-cart">
            <button
              onClick={() => {
                addToCart(product.id, selectedSize, mainImage);
              }}
              disabled={!selectedSize}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="product-review">
        <h3>Drop a review on this product!</h3>
        <p>We value your feedback to help us improve!</p>
        <input
          id="review-name"
          type="text"
          placeholder="Enter your Full name"
        />
        <input
          id="review-email"
          type="email"
          placeholder="Enter your Email Address"
        />
        <input
          id="review-phone"
          type="text"
          placeholder="Enter your Phone Number"
        />
        <input id="review-message" type="text" placeholder="Message" />
        <button onClick={handleAddReview}>Add Review</button>
        <div className="product-review-list">
          {reviews.map((review, index) => (
            <div key={index} className="product-review-item">
              <p>
                <strong>{review.name}:</strong> {review.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

import React, { useContext, useState } from 'react';
import star_icon from '../assets/star_icon.png';
import half_star_icon from '../assets/half_star_icon.jpg';
import empty_star_icon from '../assets/empty_star_icon.png';
import { ShopContext } from './ShopContext';

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
      <div className="flex flex-wrap m-2.5 mt-8 ">
        <div className="flex gap-4 flex-1">
          <div className="flex flex-col gap-2">
            <img
              src={product.image1}
              alt=""
              onClick={() => handleImageClick(product.image1)}
              className="w-24 h-24 sm:w-36 sm:h-36 object-cover"
            />
            <img
              src={product.image2}
              alt=""
              onClick={() => handleImageClick(product.image2)}
              className="w-24 h-24 sm:w-36 sm:h-36 object-cover"
            />
            <img
              src={product.image3}
              alt=""
              onClick={() => handleImageClick(product.image3)}
              className="w-24 h-24 sm:w-36 sm:h-36 object-cover"
            />
            <img
              src={product.image4}
              alt=""
              onClick={() => handleImageClick(product.image4)}
              className="w-24 h-24 sm:w-36 sm:h-36 object-cover"
            />
          </div>
          <div>
            <img className="w-5/6 h-auto" src={mainImage} alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1 mx-12 ">
          <h1 className="text-white text-4xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2 mt-4 ">
            <img src={star_icon} alt="" className=" h-5 w-5" />
            <img src={star_icon} alt="" className=" h-5 w-5" />
            <img src={star_icon} alt="" className=" h-5 w-5" />
            <img src={half_star_icon} alt="" className=" h-5 w-5" />
            <img src={empty_star_icon} alt="" className=" h-5 w-5" />
            <p>({reviewCount})</p>
          </div>
          <div className="text-red-500">
            {selectedSize
              ? `#${product.prices[selectedSize]}`
              : 'Select a size to see the price'}
          </div>
          <div className="text-white text-xl">{product.description}</div>
          <p className="text-lg text-red-500 font-normal mt-2.5">
            <span className="text-xl font-semibold">Category :</span>{' '}
            {product.category}
          </p>
          <p className="text-lg  text-red-500 font-normal mt-2.5">
            <span className="text-xl font-semibold">Tags :</span> {product.tag}
          </p>
          <div className="productdisplay-right-size">
            <h1 className="text-gray-300 text-lg font-semibold mt-3">
              Select size
            </h1>
            <div className="flex gap-5  my-5 border cursor-pointer p-4 border-solid border-red-200">
              {product.prices &&
                Object.keys(product.prices).map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className="w-20 text-base font-semibold text-white bg-red-600 cursor-pointer p-5"
                  >
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
              className="w-full text-white bg-red-400 cursor-pointer mt-2.5"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center flex-1 w-5/6 text-center bg-red-200 m-10 mb-0 p-5 rounded-lg">
        <h3 className="text-2xl text-gray-500 m-5">
          Drop a review on this product!
        </h3>
        <p className="text-2xl text-gray-600 my-2.5">
          We value your feedback to help us improve!
        </p>
        <input
          id="review-name"
          type="text"
          placeholder="Enter your Full name"
          className="w-6/7 border text-base  mx-5 my-2.5 p-2.5 rounded-md border-gray-400"
        />
        <input
          id="review-email"
          type="email"
          placeholder="Enter your Email Address"
          className="w-6/7 border text-base  mx-5 my-2.5 p-2.5 rounded-md border-gray-400"
        />
        <input
          id="review-phone"
          type="text"
          placeholder="Enter your Phone Number"
          className="w-6/7 border text-base  mx-5 my-2.5 p-2.5 rounded-md border-gray-400"
        />
        <input
          id="review-message"
          type="text"
          placeholder="Message"
          className="w-6/7 border text-base  mx-5 my-2.5 p-2.5 rounded-md border-gray-400"
        />
        <button
          onClick={handleAddReview}
          className="w-48 bg-gray-700 text-white text-base cursor-pointer p-2.5 rounded-md hover:bg-gray-700 hover:scale-110 transition-transform duration-600
"
        >
          Add Review
        </button>
        <div>
          {reviews.map((review, index) => (
            <div key={index}>
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

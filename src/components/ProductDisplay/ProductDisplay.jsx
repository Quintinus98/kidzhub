import React, { useContext, useState } from 'react';
// import './ProductDisplay.css';
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
  // flex flex-row flex-1 m-2.5 mt-8
  return (
    <div>
      <div
        className="
      m-2.5 mt-8"
      >
        <div className="flex flex-row md:flex-col flex-1 gap-4 w-full">
          <div className="flex flex-col gap-2 overflow-x-auto sm:overflow-visible mb-2 sm:mb-0">
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
          <div className="mt-2">
            <img
              className=" w-auto h-auto max-h-[75vh] object-contain"
              src={mainImage}
              alt=""
            />
          </div>
        </div>
        <div className="md:col-span-1 mt-4 md:mt-0 mx-[70px] ">
          <h1 className="text-[#3d3d3d] text-[40px] font-bold">
            {product.name}
          </h1>
          <div className="flex items-center gap-[5px] mt-2 mb-[5px]">
            <img src={star_icon} alt="" className=" h-[18px] w-[18px]" />
            <img src={star_icon} alt="" className=" h-[18px] w-[18px]" />
            <img src={star_icon} alt="" className=" h-[18px] w-[18px]" />
            <img src={half_star_icon} alt="" className=" h-[18px] w-[18px]" />
            <img src={empty_star_icon} alt="" className=" h-[18px] w-[18px]" />
            <p>({reviewCount})</p>
          </div>
          <div className="text-[#3d3d3d]">
            {selectedSize
              ? `#${product.prices[selectedSize]}`
              : 'Select a size to see the price'}
          </div>
          <div className="text-[#a06f6f] text-xl">{product.description}</div>
          <p className="text-lg font-[400px] mt-2.5">
            <span className="text-xl font-semibold">Category :</span>{' '}
            {product.category}
          </p>
          <p className="text-lg font-[400px] mt-2.5">
            <span className="text-xl font-semibold">Tags :</span> {product.tag}
          </p>
          <div className="productdisplay-right-size">
            <h1 className="text-[#656565] text-[25px] font-semibold mt-[30px]">
              Select size
            </h1>
            <div className="flex gap-[15px] mx-0 my-5 border cursor-pointer p-[18px] border-solid border-[#ebebeb]">
              {product.prices &&
                Object.keys(product.prices).map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className="w-20 text-base font-semibold text-[white] bg-[rgb(202,58,58)] cursor-pointer p-5"
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
              className="w-[calc(120%_-_90px)] text-[white] bg-[rgb(112,68,68)] cursor-pointer mt-2.5"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center flex-1 w-[calc(100%_-_150px)] text-center bg-[rgb(211,186,186)] m-[2%] p-5 rounded-[10px]">
        <h3 className="text-2xl text-[#333] mb-5">
          Drop a review on this product!
        </h3>
        <p className="text-2xl text-[#666] mx-0 my-2.5">
          We value your feedback to help us improve!
        </p>
        <input
          id="review-name"
          type="text"
          placeholder="Enter your Full name"
          className="w-[calc(100%_-_40px)] border text-base box-border mx-5 my-2.5 p-2.5 rounded-[5px] border-solid border-[#ccc]"
        />
        <input
          id="review-email"
          type="email"
          placeholder="Enter your Email Address"
          className="w-[calc(100%_-_40px)] border text-base box-border mx-5 my-2.5 p-2.5 rounded-[5px] border-solid border-[#ccc]"
        />
        <input
          id="review-phone"
          type="text"
          placeholder="Enter your Phone Number"
          className="w-[calc(100%_-_40px)] border text-base box-border mx-5 my-2.5 p-2.5 rounded-[5px] border-solid border-[#ccc]"
        />
        <input
          id="review-message"
          type="text"
          placeholder="Message"
          className="w-[calc(100%_-_40px)] border text-base box-border mx-5 my-2.5 p-2.5 rounded-[5px] border-solid border-[#ccc]"
        />
        <button
          onClick={handleAddReview}
          className="w-[200px] bg-[#333] text-[white] text-base cursor-pointer p-2.5 rounded-[5px] hover:bg-gray-700 hover:scale-110 transition-transform duration-600
"
        >
          Add Review
        </button>
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

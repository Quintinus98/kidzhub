import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../../assets/star_icon.png';
import half_star_icon from '../../assets/half_star_icon.jpg';
import empty_star_icon from '../../assets/empty_star_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={product.image}
              alt=""
            />
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
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              #{product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              #{product.new_price}
            </div>
          </div>
          <div className="productdisplay-right-description">
            {product.description}
          </div>
          <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <p className="productdisplay-right-category">
            <span>Category :</span> {product.category}
          </p>
          <p className="productdisplay-right-category">
            <span>Tags :</span> {product.tag}
          </p>
        </div>
        <div className="product-review">
          <h3>Drop a review on this product!</h3>
          <p>Your opinion means a lot to us!</p>
          <input type="text" placeholder="Enter your Full name" />
          <input type="email" placeholder="Enter your Email Address" />
          <input type="text" placeholder="Enter your Phone Number" />
          <input type="text" placeholder="Message" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

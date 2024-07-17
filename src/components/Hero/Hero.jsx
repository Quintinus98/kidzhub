import React from 'react';
import './Hero.css';
import Img2 from '../../assets/web_new.jpg';
import arrow from '../../assets/arrow.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <p>New collection</p>
          <p>For everyone</p>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={Img2} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;

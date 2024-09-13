import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Popular from '../components/Popular';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Popular />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;

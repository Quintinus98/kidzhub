import React from 'react'
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Newsletter from '../components/Newsletter/Newsletter';


const HomePage = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Popular />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default HomePage

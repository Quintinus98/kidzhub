import React from 'react';
import './ShopCategory.css';
// import { useContext } from 'react';
// import ShopContext from '../../context/ShopContext';
// import arrow from '../../Assets/arrow.png';
// import Item from '../../components/Items/Item';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';

const ShopCategory = () => {
  // const {all_products}= useContext(ShopContext)
  return (
    <div>  
      <NavBar />    
      {/* <div className="shop-category">
        <img src={props.banner} alt="" />
        <div className="shopCategoty-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopCategory-sort">
            Sort by <img src={arrow} alt="" />
          </div>
        </div>
        <div className="shopCategory-products">
          {all_products.map((item, i)=>{
            if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })}
        </div>
      </div> */}
      <Footer />
    </div>
  )
}

export default ShopCategory

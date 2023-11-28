import React from 'react';
import './SaleSection.css'; 

const SaleSection = () => {
  return (
    <div className="sale-section">
      <div className="sale-content">
        <h2>Special</h2>
        <h1>SALE 50% DISCOUNT</h1>
        <h5>All Products Food</h5>
        <p>Indulge your taste buds with an extraordinary culinary experience at <br/><b>Khaas</b>. For a limited time, we're thrilled to offer you an exclusive 50% <br/>discount on our mouthwatering menu. Immerse yourself in a world <br/>of flavors crafted with passion <br/>and precision.</p>
        <button className='button'>Order Now</button>
      </div>
    </div>
  );
};

export default SaleSection;

import React from 'react';
import './PricingSection.css'; 
const PricingSection = () => {
  return (
    <div className="pricing-section">
      <div className="pricing-box">
        <div className="green-top">
        <h1>Basic</h1>
          <h2>$50</h2>
        </div>
        <div className="light-grey-bottom">
            <li>Biryani</li>
            <li>Kebab</li>
            <li>Keema</li>
        <button class='button'>Get Started</button>
        </div>
      </div>
      <div className="pricing-box">
        <div className="green-top">
        <h1>Standard</h1>
          <h2>$75</h2>
        </div>
        <div className="light-grey-bottom">
            <li>Nihari</li>
            <li>Biryani</li>
            <li>Seekh Kebab</li>
          <button class='button'>Get Started</button>
        </div>
      </div>
      <div className="pricing-box">
        <div className="green-top">
        <h1>Premium</h1>
          <h2>$100</h2>
        </div>
        <div className="light-grey-bottom">
            <li>Biyani</li>
            <li>Chicken Karahi</li>
            <li>Nihari</li>
          <button class='button'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

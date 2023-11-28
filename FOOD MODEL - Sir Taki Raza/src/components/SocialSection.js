import React from 'react';
import './SocialSection.css'; 

const SocialSection = () => {
  return (
    <div className="social-section">
      <div className="green-rectangle"></div>
      <div className="content">
        <img src="path/to/your/image.jpg" alt="Best Taste Food" />
        <h2>The Best Taste Food</h2>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-whatsapp"></i>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;

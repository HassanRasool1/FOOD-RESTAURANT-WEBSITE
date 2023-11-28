import React from 'react';
import './BlogSection.css'; 

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="left-image"></div>
        <div className="center-box">
          <br/><h2>Eat Food. Not Too Much. <br/>Mostly Plants.</h2>
          <p>
            Indulge in the rich tapestry of flavors with our Desi Niche Food collection. Our Desi Niche Food celebrates the essence of local spices, vibrant colors, and time-honored cooking techniques.        
          </p>
          <button class="button1">Explore</button>
        </div>
          <div className="right-image">
          </div>
    </div>
  );
};

export default BlogSection;

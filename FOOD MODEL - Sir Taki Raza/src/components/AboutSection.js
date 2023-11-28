// AboutSection.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './AboutSection.css'; 

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <Typography variant="h3">Let the food be thy medicine, medicine be thy food.</Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <button class="button" role="button">
          Explore More
        </button>
      </div>
      <div className="image-container">
        <div className="border-overlay"></div>
        <img src="https://cakebycourtney.com/wp-content/uploads/2018/11/French-Apple-Pie-Cake-6-e1542377104324.jpg" alt="Upload" className="upload-image" />
      </div>
    </div>

  );
};

export default AboutSection;

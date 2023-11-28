import React from 'react';
import './FooterSection.css'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="green-background">
        <img src="logo.png" alt="Logo" />
        <h2>The Best Taste Food</h2>
        <div className="social-icons">
          <FacebookIcon style={{ marginRight: '15px' }}/>
          <InstagramIcon style={{ marginRight: '15px' }}/>
          <WhatsAppIcon style={{ marginRight: '15px' }}/>
          <TwitterIcon style={{ marginRight: '15px' }}/>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

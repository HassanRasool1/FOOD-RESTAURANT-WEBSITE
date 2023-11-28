import React from 'react';
import './Herosection.css'; 
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const HeroSection = () => {
  return (
    <div className="hero-section">
      <br/>
        <h1>Welcome to Our Food Station</h1>
        <h4>Discover amazing things and more.</h4>
        <br/>
    <img src="https://img.freepik.com/free-vector/flat-design-healthy-food-twitter-header-template_23-2149154107.jpg?w=1480&t=st=1700729784~e" alt="BANNER" className="banner" />
      <button className='buttonE'>Explore</button> 
      <button className='buttonG'>GO</button> 
         </div>
  );
};

export default HeroSection;

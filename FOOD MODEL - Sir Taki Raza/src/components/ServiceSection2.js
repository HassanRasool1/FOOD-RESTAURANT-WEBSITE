import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './ServiceSection.css';

const ServiceSection2 = () => {
  return (
    <div className="service-section">
      <div className="service-content">
        <Typography variant="h4" style={{color: '#003616' }} >Peanut Butter    <span className='aligned-text'>$45</span> </Typography>
          <br/>
            <br/>
              <Typography variant="body1" paragraph>
                Peanut butter is a spread or paste made from ground, dry-roasted peanuts. It is a popular and versatile food product known for its rich and creamy texture, along with a distinctive nutty flavor. Often consumed as a spread on bread or crackers, peanut butter is also used in various culinary applications, including sandwiches, baking, and cooking.Beyond its delicious taste, peanut butter is a good source of protein, healthy fats, and essential nutrients, such as vitamins and minerals. It is commonly appreciated for its role in providing a satisfying and energy-boosting snack. Additionally, peanut butter comes in different varieties, including smooth, crunchy, and natural, catering to diverse taste preferences.
              </Typography>
              <Button class='button'>
                Order Now
              </Button>
      </div>
            <div className="image-container1">
              <img src="https://th.bing.com/th/id/R.3050172199fe2f1c22f549b9ecfcd801?rik=nRIM0TV2QhskSQ&riu=http%3a%2f%2fcookdiary.net%2fwp-content%2fuploads%2fimages%2fCooked_Chicken_929.jpg&ehk=iEVGRaFslHpKsy7DIEMbbCMgpAU53%2fc0QNp3VfRX7Z8%3d&risl=&pid=ImgRaw&r=0" alt="Service Image" className="service-image" />
            </div>
    </div>
  );
};

export default ServiceSection2;

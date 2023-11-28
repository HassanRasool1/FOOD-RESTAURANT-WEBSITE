import Navbar from './components/Navbar';
import './App.css';
import Navbarsearch from './components/Navbarsearch';
import HeroSection from './components/Herosection';
import AboutSection from './components/AboutSection';
import AboutSection2 from './components/AboutSection2';
import ServiceSection from './components/ServiceSection';
import ServiceSection2 from './components/ServiceSection2';
import SaleSection from './components/SaleSection';
import PricingSection from './components/PricingSection';
import SaleSection2 from './components/SaleSection2';
import BlogSection from './components/BlogSection';
import FooterSection from './components/FooterSection';


function App() {
  return (
    <div className="App">
      <Navbarsearch/>
     <Navbar/>
     <HeroSection/>
     <div className='Abouthead'>
     <hr/>
     <h1 variant="h3">ABOUT US</h1>
        <p> 
          Indulge in a culinary journey at our restaurant, 
          where exquisite flavors meet a cozy ambiance.
          <br/> Savor the artistry of our chefs, creating memorable dining experiences for food enthusiasts.
        </p>
        </div>
     <AboutSection/>
      <AboutSection2/>
      <div className='Servicehead'>
        <hr/>
     <h1 className="h3">SERVICE</h1>
        <p> 
        From succulent grilled meats to artfully prepared vegetarian delights, our menu caters to every palate. 
        <br/>Enjoy a dining experience that transcends the ordinary, where each bite is a symphony of taste and texture.
        </p>
        </div>
      <ServiceSection/>
      <ServiceSection2/>
        <hr/>
      <SaleSection/>
      <div className='Servicehead'>
     <h1 className="h3">PRICING</h1>
        <p> 
        From succulent grilled meats to artfully prepared vegetarian delights, our menu caters to every palate. 
        <br/>Enjoy a dining experience that transcends the ordinary, where each bite is a symphony of taste and texture.
        </p>
        </div>
     <hr/>
     <PricingSection/>
     <br/><br/>
     <br/><br/>
     <SaleSection2/>

     <div className='Bloghead'>
     <h1 className="h3">BLOGS</h1>
        <p> 
        From succulent grilled meats to artfully prepared vegetarian delights, our menu caters to every palate. 
        <br/>Enjoy a dining experience that transcends the ordinary, where each bite is a symphony of taste and texture.
        </p>
        </div>
        <br/>

     <BlogSection/>
     <br/>
     <br/>
     <FooterSection/>
    </div>
  );
}

export default App;

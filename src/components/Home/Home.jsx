import React from "react";
import hero from "../../../public/images/heroImage.png";


const Home = () => {
  return (
    <div className="header flex flex-col md:flex-row items-center justify-between gap-30 bg-gradient h-[84vh] px-20 border-t border border-gray-500  ">
      <div className="header-content flex flex-col justify-center items-start py-0 md:py-20">
        <p className="hero-subheading text-2xl">Explore the Latest in Tech Industries</p>
        <h1 className="hero-heading flex  text-md py-1.5 md:text-4xl md:py-2 text-[#003b99] ">
          Your Destination for Cutting-Edge Gadgets!
        </h1>
        <p className="hero-para py-4 sm:py-2 text-[#1e1f23] text-[12px] md:text-[17px] md:py-3">
          Welcome to Thapa eComStore, your ultimate destination for cutting-edge
          gadgets! Explore the latest in tech innovation and style with us. Shop
          now and discover a world of possibilities!
        </p>
        <div className="hero-btn my-1.5">
          <a href="products.html" className="btn px-4 py-3 bg-[#2a2c30] text-white my-4">
            Explore Our Products
          </a>
        </div>
      </div>
      <div className="header-image ">
        <img src={hero} alt="" className="w-1/2 md:w-full"   />
  
        
     
      </div>
  
      
    </div>
  );
};

export default Home;

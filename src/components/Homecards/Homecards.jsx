import React from "react";

import laptop from "../../../public/images/laptop.png";
import iphone from "../../../public/images/iphone.png";
import headphone from "../../../public/images/headphone.png";


const Homecards = () => {
  return (
    <>  
<div className="cards-section flex my-15  px-[10%] mx-auto ">
  <div className="cards grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center ">
 
    <div className="card  flex  items-center justify-center text-center space-x-5 shadow-2xl p-3 rounded-lg bg-white">
    <img src={laptop} alt="" className="w-50" />
  
      <div class="extra-text flex flex-col space-y-5">

            <p className="text-blue-500 ">new year sale</p>
            <h3 className="  flex flex-col">get and extra 50% off</h3>
            <a href="#">Shop now</a>
           
          </div>
    </div>
    <div className="card flex  items-center justify-center text-center space-x-5 shadow-2xl p-3 rounded-lg bg-white  ">
    <img src={iphone} alt="" className="w-50" />
      
      <div class="extra-text flex flex-col gap-2   ">
            <p className="text-blue-400 ">new year sale</p>
            <h3>get and extra 50% off</h3>
            <a href="#">Shop now</a>
          
          </div>
      
    
    </div>
    <div className="card flex  items-center justify-center text-center space-x-5 shadow-2xl p-3 rounded-lg bg-white">
    <img src={headphone} alt="" className="w-50" />
      <div class="extra-text flex flex-col gap-2">
            <p className="text-blue-500">new year sale</p>
            <h3>get and extra 50% off</h3>
            <a href="#">Shop now</a>
          
          </div>
          
    
    </div>
  </div>
</div>
    
      
    
   
    </>
  );
};``

export default Homecards;

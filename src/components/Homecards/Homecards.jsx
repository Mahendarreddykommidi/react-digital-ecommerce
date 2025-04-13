import React from "react";




const Homecards = () => {
  return (
    <>  
<div className="cards-section flex my-15  px-[10%] mx-auto ">
  <div className="cards grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center ">
    <div className="card  flex  items-center justify-center text-center space-x-5 ">
      <img src="public\images\mobiles.png" alt="" srcset=""  className="max-w-full w-[30%]" />
      <div class="extra-text flex flex-col gap-2">
            <p className="text-blue-500">new year sale</p>
            <h3 className="font-bold text-2xl block">get and extra 50% off</h3>
            <a href="#">Shop now</a>
          </div>
    </div>
    <div className="card flex  items-center justify-center text-center space-x-5 ">
      
      <div class="extra-text flex flex-col gap-2   ">
            <p className="text-blue-400 font-light text-3xl capitalize">new year sale</p>
            <h3>get and extra 50% off</h3>
            <a href="#">Shop now</a>
          </div>
          <img src="public\images\laptop.png" alt="" className="max-w-full w-[30%]" />
    
    </div>
    <div className="card flex  items-center justify-center text-center space-x-5">
     
      <div class="extra-text flex flex-col gap-2">
            <p className="text-blue-500">new year sale</p>
            <h3>get and extra 50% off</h3>
            <a href="#">Shop now</a>
          </div>
          <img src="public\images\headphoneEcom.png" alt="" className="max-w-full w-[30%]" />
    
    </div>
  </div>
</div>
    
      
    
   
    </>
  );
};``

export default Homecards;

import React from 'react'
import all_products from "../../assets/assets"
import Productitem from '../Productitem/Productitem'

const Productcards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 px-10 items-start  my-20 justify-start mx-auto gap-10 py-10 w-[1200px]  '> 

      {
        all_products.map((item,index)=>{
          return(
            <div key={index}>
             <Productitem  id={item.id} category={item.category} name={item.name} image={item.image} price={item.price}   description={item.description}/>

            </div> 
          )
        })
      }


    </div>
  )
}

export default Productcards
import React, { useContext } from 'react'
import { ShopContext } from '../../context/context'
import {  ShoppingCartIcon } from 'lucide-react';


const Productitem = ({ id, category, image, name, price, description }) => {
  const{addtoCart,removeFromCart,cartItems,products,all_products}=useContext(ShopContext)
  

  const cartItemCount = cartItems[id] || 0;

  return (
    <div className='product-item flex flex-col gap-5 items-start shadow-2xl p-7 md:p-15'>
      <p>{id}</p>
      <p className='bg-[#e7d6d6] rounded-full py-0.5 px-3'>{category}</p>
      <p>{name}</p>
      <img src={image} alt={name} className='w-[30%] lg:w-full' />
      <div className="item-prices flex gap-4 items-center">
        <div className="item-old-price line-through font-bold">${price * 4}</div>
        <div className="item-new-price">${price}</div>
      </div>
      <p>{description}</p>
      <button onClick={() => addtoCart(id)} className='primary flex items-center gap-2 hover:border-2 border-red'><ShoppingCartIcon/>Add to cart</button>
     
    
    </div>
  );
}

export default Productitem


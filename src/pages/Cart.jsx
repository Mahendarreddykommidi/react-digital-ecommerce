import React, { useContext } from 'react'
import { ShopContext } from '../context/context';
import { Cross, X } from 'lucide-react';
import { FaCut } from 'react-icons/fa';

const Cart = () => {
  const { all_products, cartItems, removefromCart } = useContext(ShopContext);
  const cartProducts = all_products.filter(product => cartItems[product.id] > 0);
  const cartTotal=cartProducts.reduce((total, product) => {
    const quantity = cartItems[product.id];
    return total + product.price * quantity;
  }, 0).toFixed(2)
  return (
    <div className="p-4">
      <div className="my-cart">
        <div className="cart-items-title">
          <h1 className="text-2xl font-bold text-center">My Cart</h1>

          <div className="cart-items-header hidden justify-center sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] gap-4 text-center mx-5 my-20">
            <p className="font-bold">Product</p>
            <p className="font-bold">Name</p>
            <p className="font-bold">Price</p>
            <p className="font-bold">Quantity</p>
            <p className='font-bold'>Total</p>
            <p className='font-bold'>Remove</p>
          </div>
        </div>
      </div>

      <div className="cart-items grid gap-5 my-10 ">
        {cartProducts.map((product) => {
          const quantity = cartItems[product.id];
          const totalPrice = product.price * quantity;
          return (
            <div
              key={product.id}
              className="cart-item sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] gap-4 px-10 text-center  items-start justify-between  border-b pb-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 mx-auto"
              />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <p>{quantity}</p>
              <p>${totalPrice}</p>
              <p className='' onClick={()=>removefromCart(product.id)}><X /></p>
             
            </div>
          );
        })}
      </div>
      
      <div className="cart-bottom-left flex flex-col space-y-2 mx-6 w-1/2 border-b border-gray-500  ">
      <div className="cart-total">
          <h2>Cart Total</h2>
        </div>
        
      <div className="cart-total-details flex gap-5">
            <p>Subtotal</p>
            <p>${cartTotal}</p> {/* Correctly call the function and format the value */}
          </div>
          <hr />
        
          <div className="cart-total-details flex gap-5">
            <p>Delivery Fee</p>
            <p className='my-2'>Free</p> 
          </div>
          <hr />
      
          <div className="cart-total-details inline-flex gap-5">
            <b> Total</b>
            <p className='my-2'>${cartTotal}</p> {/* Add delivery fee to subtotal */}
            <hr />
            
          </div>
      </div>
      </div>
      
  
    
  );
};

export default Cart
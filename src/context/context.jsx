import { createContext, useEffect, useState } from "react";
import all_products from "../assets/assets";
export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(all_products);



  const [cartItems, setCartItems] = useState({});
  
  // Add item to cart
  const addtoCart = (itemId) => {
    if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
};
const getdefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0;
  }
  return cart;
}

const removefromCart=(itemId)=>{
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
}
  // Update cart quantity directly
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  
  // Clear specific item from cart
  const clearCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };
  
  // Reset entire cart
  const clearCart = () => {
    setCartItems(getDefaultCart());
  };
  
  // Check if cart is empty
  const isCartEmpty = () => {
    return Object.values(cartItems).every(quantity => quantity === 0);
  };
  
  // Get total number of items in cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };
  
  // Calculate total cart price
 

  const TotalCartamount=()=>{
    let totalAmount=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        let iteminfo=all_products.find((product)=>product.id===Number(item))
        totalAmount += iteminfo.new_price*cartItems[item];
      }
      
    }
    return totalAmount; 
  }
  const getTotalCartAmount=()=>{
    let totalItem=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        
        totalItem +=cartItems[item];
      }
      
    }
    return totalItem; 
  }
  
    


  // Log updated cart (for debugging)
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    cartItems,
    addtoCart,
    removefromCart,
    updateCartItemCount,
    clearCartItem,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems,
    isCartEmpty,
    all_products,
    products,getdefaultCart
    ,TotalCartamount
    
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
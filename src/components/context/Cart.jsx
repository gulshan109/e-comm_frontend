import React, { createContext, useContext, useState } from 'react'


const CartContext = createContext();
const Cart = ({children}) => {
    const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider  value={[cart, setCart]}>
        {children}
    </CartContext.Provider>
  )
}

// custom hooks
const useCart = ()=> useContext(CartContext)

export {useCart, Cart}

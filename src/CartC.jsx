import { createContext, useContext, useState } from "react";

export const CartC = createContext();
export const useCart = () => useContext(CartC);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart((prev) => [...prev, item]);

  return (
    <CartC.Provider value={{ cart, addToCart }}>
      {children}
    </CartC.Provider>
  );
}



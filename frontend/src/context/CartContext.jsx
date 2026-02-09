import { createContext, useContext, useState } from "react";
import { addToCartApi } from "../api/api.js";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product, qty) => {
    const existing = cart.find((i) => i._id === product._id);

    if (existing) {
      setCart(
        cart.map((i) =>
          i._id === product._id
            ? { ...i, quantity: i.quantity + qty }
            : i
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: qty }]);
    }

    await addToCartApi(product._id, qty);
  };

  const updateQuantity = (id, qty) =>
    setCart(cart.map((i) => (i._id === id ? { ...i, quantity: qty } : i)));

  const removeFromCart = (id) =>
    setCart(cart.filter((i) => i._id !== id));

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

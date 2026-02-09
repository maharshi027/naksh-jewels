import { createContext, useContext, useState } from "react";
import { addToCartApi } from "../api/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    const existing = cart.find((item) => item._id === product._id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    await addToCartApi({
      productId: product._id,
      quantity: 1,
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

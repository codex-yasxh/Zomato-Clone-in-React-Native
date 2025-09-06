import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [hotel, setHotel] = useState(null); // 🔥 track hotel

  const addToCart = (item, selectedHotel) => {
    setCartItems((prev) => [...prev, item]);
    if (!hotel) setHotel(selectedHotel); // first time set hotel
  };

  // remove ONE instance (first match)
  const removeOneFromCart = (id) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((it) => it.id === id);
      if (idx === -1) return prev;
      const next = [...prev];
      next.splice(idx, 1);
      return next;
    });
  };

  // remove ALL instances of that item
  const removeAllFromCart = (id) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    setHotel(null); // also reset hotel
  };

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        hotel,
        setHotel,   // expose in case you want to set manually
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};

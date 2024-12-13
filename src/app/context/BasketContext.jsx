"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create context
const BasketContext = createContext();

// Provider component
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = basket.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalPrice(total.toFixed(2));
    };
    calculateTotalPrice();
  }, [basket]);

  const addItem = (item) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find(
        (basketItem) => basketItem.id === item.id
      );
      if (existingItem) {
        return prevBasket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        );
      } else {
        return [...prevBasket, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (itemId) => {
    setBasket((prevBasket) => {
      const itemToRemove = prevBasket.find((item) => item.id === itemId);
      if (itemToRemove.quantity > 1) {
        return prevBasket.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevBasket.filter((item) => item.id !== itemId);
      }
    });
  };

  const clearItem = (itemId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        totalPrice,
        addItem,
        removeItem,
        clearBasket,
        clearItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

// Custom hook to use the basket context
export const useBasket = () => {
  return useContext(BasketContext);
};

// components/BasketDrawerArticles.jsx
import { Button } from "@/components/ui/button";
import { InputOTPSeparator } from "@/components/ui/input-otp";
import React from "react";
import { useBasket } from "../context/BasketContext";

const BasketDrawerArticles = ({ item }) => {
  const { addItem, removeItem, clearItem } = useBasket();

  const removeItemQuantity = () => {
    removeItem(item.id);
  };

  const addItemQuantity = () => {
    addItem(item);
  };

  const removeArticle = () => {
    clearItem(item.id);
  };

  const articleTotalPrice = (item.price * item.quantity).toFixed(2);

  return (
    <>
      <li className="flex justify-between items-center mb-2">
        <span>{item.name}</span>
        <Button onClick={removeItemQuantity}>-</Button>
        <InputOTPSeparator />
        {item.quantity}
        <InputOTPSeparator />
        <Button onClick={addItemQuantity}>+</Button>
        <span>{articleTotalPrice} €</span>
        <button onClick={removeArticle} className="text-red-500">
          Supprimer
        </button>
      </li>
    </>
  );
};

export default BasketDrawerArticles;

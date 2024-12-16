// components/BasketDrawerArticles.jsx
import { Button } from "@/components/ui/button";

import React from "react";
import { useBasket } from "../../context/BasketContext";

const BasketDrawerArticles = ({ item }) => {
  const { addItem, removeItem } = useBasket();

  const removeItemQuantity = () => {
    removeItem(item.id);
  };

  const addItemQuantity = () => {
    addItem(item);
  };

  const articleTotalPrice = (item.price * item.quantity).toFixed(2);

  return (
    <>
      <li className="flex border-t-2 border-gray-300  mx-6 h-40 justify-center items-center   pr-8  mb-2">
        <div className="flex justify-center items-center h-full ">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-32 h-32 object-cover"
          />
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-4">
            <p className="font-bold">{item.name}</p>

            <div className="flex w-56 justify-between items-center gap-4">
              <p>{articleTotalPrice} €</p>
              <div className="flex gap-4  items-center">
                <Button variant="outline" onClick={removeItemQuantity}>
                  -
                </Button>

                {item.quantity}

                <Button variant="outline" onClick={addItemQuantity}>
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default BasketDrawerArticles;

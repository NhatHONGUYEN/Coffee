"use client";

import React from "react";
import { useBasket } from "../context/BasketContext";
import { Button } from "@/components/ui/button";

export default function ProductDetails({ product }) {
  const { addItem } = useBasket();

  const handleAddItem = () => {
    addItem(product);
  };

  return (
    <div className="max-w-7xl pt-20 flex justify-center items-center">
      <div className="lg:w-[4000px]">
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className="flex flex-col gap-4 text-md">
        <p>
          <span className="font-bold">Name:</span> {product.name}
        </p>
        <p className="flex w-96 flex-col">
          <span className="font-bold">Description:</span> {product.description}
        </p>
        <p>
          <span className="font-bold">Price:</span> {product.price} €
        </p>
        <p>
          <span className="font-bold">Region:</span> {product.region}
        </p>
        <p>
          <span className="font-bold">Weight:</span> {product.weight}
        </p>
        <p>
          <span className="font-bold">Roast Level:</span> {product.roast_level}
        </p>
        <p className="flex flex-col">
          <span className="font-bold">Flavor Profile:</span>{" "}
          {product.flavor_profile}
        </p>
        <p className="flex flex-col">
          <span className="font-bold">Grind Option:</span>{" "}
          {product.grind_option}
        </p>
        <Button onClick={handleAddItem}>Ajouter</Button>
      </div>
    </div>
  );
}

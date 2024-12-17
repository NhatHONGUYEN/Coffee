"use client";

import React from "react";
import { useBasket } from "../../context/BasketContext";
import { Button } from "@/components/ui/button";
import Suggestions from "../Suggestions";
import ProductAccordion from "./ProductAccordion";
import ProductInfo from "./ProductInfo";
import Reviews from "../review/Reviews";
import Image from "next/image";

export default function ProductDetails({ product }) {
  const { addItem } = useBasket();

  const handleAddItem = () => {
    addItem(product);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 pr-40 flex justify-center items-center">
        <div className="lg:w-[600px]">
          <Image
            src={product.image_url}
            alt={product.name}
            objectFit="cover"
            width={600}
            height={100}
            className="object-cover "
          />
        </div>
        <div className="flex flex-col gap-4 text-md">
          <ProductInfo product={product} />
          <ProductAccordion product={product} />
          <Button onClick={handleAddItem}>Ajouter</Button>
        </div>
      </div>
      <Reviews />
      <Suggestions />
    </>
  );
}

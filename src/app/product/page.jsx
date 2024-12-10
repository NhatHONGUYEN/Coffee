"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fake-coffee-api.vercel.app/api"
        );
        setProducts(response.data);
        setDisplayedProducts(response.data.slice(0, itemsPerPage));
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const loadMore = () => {
    const nextIndex = currentIndex + 4;
    const nextProducts = products.slice(nextIndex, nextIndex + 4);
    setDisplayedProducts([...displayedProducts, ...nextProducts]);
    setCurrentIndex(nextIndex);
  };

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  if (!products.length) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="max-w-7xl py-20 mx-auto flex justify-center flex-col items-center">
      <ul className="grid gap-16 grid-cols-4 w-full">
        {displayedProducts.map((product, id) => (
          <ProductCard key={id} product={product} />
        ))}
      </ul>
      {currentIndex + 4 < products.length && (
        <Button onClick={loadMore} className="mt-10">
          Voir plus
        </Button>
      )}
    </div>
  );
}

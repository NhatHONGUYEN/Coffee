"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fake-coffee-api.vercel.app/api"
        );

        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  if (!products.length) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="max-w-7xl py-20 mx-auto flex justify-center  ">
      <ul className="grid gap-16 grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

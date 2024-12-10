"use client";

import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1>Produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Prix : {product.price} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

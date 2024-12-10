"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fake-coffee-api.vercel.app/api/${id}`
        );
        console.log(response.data);
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

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div className="max-w-7xl py-20 mx-auto flex justify-center">
            <div className="grid gap-16 grid-cols-4">
              <div>
                <img
                  className="object-cover hover:scale-125 duration-300 ease-in-out w-full h-48"
                  src={product.image_url}
                  alt={product.name}
                />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Produit ID: {product.id}</p>
                <p>{product.price} €</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import ProductDetails from "@/app/components/singleProduct/ProductDetails";
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
        <ProductDetails product={product} key={product.id} />
      ))}
    </div>
  );
}

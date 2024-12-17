"use client";

import ProductDetails from "@/app/components/singleProduct/ProductDetails";
import { useBasket } from "@/app/context/BasketContext";
import { useFetchProducts } from "@/app/hook/useFetchProducts";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const { loading, error } = useFetchProducts();
  const { basket } = useBasket();

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
  }, [basket]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        Chargement...
      </div>
    );
  }

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

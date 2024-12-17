"use client";

import { useFetchProducts } from "../hook/useFetchProducts";
import ProductCard from "./ProductCard";

export default function Suggestions() {
  const { products, error, loading } = useFetchProducts();

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const randomProducts = products
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((product) => <ProductCard product={product} key={product.id} />);

  return (
    <div className="max-w-7xl mx-auto   ">
      <h1 className="text-xl font-bold pt-5  pb-10  ">Suggestions</h1>
      <div className="flex gap-10 ">{randomProducts}</div>;
    </div>
  );
}

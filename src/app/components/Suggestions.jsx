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

    .slice(0, 4)
    .map((product) => <ProductCard product={product} key={product.id} />);

  return (
    <div className="max-w-7xl mx-auto mb-40 h-96">
      <h1 className="text-xl font-bold pb-10">Suggestions</h1>
      <div className="flex gap-10 ">{randomProducts}</div>
    </div>
  );
}

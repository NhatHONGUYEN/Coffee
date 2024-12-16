"use client";

import ProductCard from "../components/ProductCard";
import { useLikes } from "../context/LikesContext";

export default function LikesPage() {
  const { likes } = useLikes();

  return (
    <div className="max-w-7xl py-20 mx-auto flex justify-center flex-col items-center">
      <h1>Mes Likes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {likes.map((product, id) => (
          <ProductCard key={id} product={product} />
        ))}
      </div>
    </div>
  );
}

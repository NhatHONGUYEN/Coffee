"use client";

import { useLikes } from "../context/LikesContext";

export default function LikesPage() {
  const { likes } = useLikes();
  console.log(likes);

  return (
    <div>
      <h1>Mes Likes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {likes.map((productId, id) => (
          <div key={id} className="grid-item">
            {/* Remplacez ceci par votre composant ProductCard ou les détails du produit */}
            <p>Product ID: {productId}</p>
            <p>{productId.name} </p>
            <p>{productId.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

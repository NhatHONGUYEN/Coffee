// LikesPage.js
import { useLikes } from "../context/LikesContext";
import ProductCard from "../components/ProductCard";

export default function LikesPage() {
  const { likes } = useLikes();

  return (
    <div>
      <h1>Mes Likes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {likes.map((productId) => (
          <ProductCard
            key={productId}
            product={{ id: productId /* autres propriétés du produit */ }}
          />
        ))}
      </div>
    </div>
  );
}

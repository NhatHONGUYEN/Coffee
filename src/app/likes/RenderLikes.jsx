import ProductCard from "../components/ProductCard";

export default function RenderLikes({ likes }) {
  return (
    <>
      <h1 className="text-lg font-semibold">My Likes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {likes.map((product, id) => (
          <ProductCard key={id} product={product} />
        ))}
      </div>
    </>
  );
}

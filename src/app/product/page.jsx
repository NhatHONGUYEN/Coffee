"use client";

import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { useSearch } from "../context/SearchContext";
import { useDisplayedProducts } from "../hook/useDisplayedProducts";
import { useFetchProducts } from "../hook/useFetchProducts";

export default function Products() {
  const { searchTerm } = useSearch();
  const { products, error } = useFetchProducts();
  const itemsPerPage = 8;
  const { displayedProducts, currentIndex, loadMore } = useDisplayedProducts(
    products,
    searchTerm,
    itemsPerPage
  );

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  if (!products.length) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        Chargement...
      </div>
    );
  }

  return (
    <div className="max-w-7xl py-20 mx-auto flex justify-center flex-col items-center">
      <ul className="grid gap-16 grid-cols-4 w-full">
        {displayedProducts.map((product, id) => (
          <ProductCard key={id} product={product} />
        ))}
      </ul>
      {currentIndex + itemsPerPage <
        (searchTerm
          ? products.filter((product) =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            ).length
          : products.length) && (
        <Button onClick={loadMore} className="mt-10">
          Voir plus
        </Button>
      )}
    </div>
  );
}

// hooks/useDisplayedProducts.js
import { useState, useEffect } from "react";

export const useDisplayedProducts = (products, searchTerm, itemsPerPage) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const filteredProducts = searchTerm
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : products;
    setDisplayedProducts(filteredProducts.slice(0, itemsPerPage));
    setCurrentIndex(0);
  }, [searchTerm, products, itemsPerPage]);

  const loadMore = () => {
    const nextIndex = currentIndex + itemsPerPage;
    const filteredProducts = searchTerm
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : products;
    const nextProducts = filteredProducts.slice(
      nextIndex,
      nextIndex + itemsPerPage
    );
    setDisplayedProducts((prevProducts) => [...prevProducts, ...nextProducts]);
    setCurrentIndex(nextIndex);
  };

  return { displayedProducts, currentIndex, loadMore };
};

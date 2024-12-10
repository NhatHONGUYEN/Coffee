// hooks/useFetchProducts.js
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fake-coffee-api.vercel.app/api"
        );
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { products, error };
};

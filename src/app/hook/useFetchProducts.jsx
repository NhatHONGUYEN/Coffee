// hooks/useFetchProducts.js
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Ajout de l'état de chargement

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fake-coffee-api.vercel.app/api"
        );
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Mettre à jour l'état de chargement après la requête
      }
    };

    fetchData();
  }, []);

  return { products, error, loading };
};

"use client";
// LikesContext.js
import { createContext, useContext, useState } from "react";

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);

  const addLike = (productId) => {
    setLikes((prevLikes) => [...prevLikes, productId]);
  };

  const removeLike = (productId) => {
    setLikes((prevLikes) => prevLikes.filter((id) => id !== productId));
  };

  const isLiked = (productId) => {
    return likes.includes(productId);
  };

  return (
    <LikesContext.Provider value={{ likes, addLike, removeLike, isLiked }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  return useContext(LikesContext);
};

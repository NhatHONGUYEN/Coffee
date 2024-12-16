"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../api/firebaseConfig";

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchLikes(user.uid);
      } else {
        setUser(null);
        setLikes([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchLikes = async (userId) => {
    const userDocRef = doc(db, "users", userId);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      setLikes(userDocSnap.data().likes || []);
    }
  };

  const addLike = async (product) => {
    if (user) {
      // Vérifie si le produit est déjà liké
      if (likes.some((likedProduct) => likedProduct.id === product.id)) {
        console.log("Ce produit est déjà liké.");
        return;
      }

      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        likes: arrayUnion(product),
      });
      setLikes((prevLikes) => [...prevLikes, product]);
    }
  };

  const removeLike = async (productId) => {
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        likes: arrayRemove({ id: productId }),
      });
      setLikes((prevLikes) =>
        prevLikes.filter((product) => product.id !== productId)
      );
    }
  };

  const isLiked = (productId) => {
    return likes.some((likedProduct) => likedProduct.id === productId);
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

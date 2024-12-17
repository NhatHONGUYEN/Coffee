"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../api/firebaseConfig";

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const userDocRef = doc(db, "users", user.uid);
        const unsubscribeLikes = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            setLikes(docSnap.data().likes || []);
            console.log("Likes fetched from Firestore:", docSnap.data().likes);
          }
        });
        return () => unsubscribeLikes();
      } else {
        setUser(null);
        setLikes([]);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const addLike = async (product) => {
    if (user) {
      if (likes.some((likedProduct) => likedProduct.id === product.id)) {
        console.log("Ce produit est déjà liké.");
        return;
      }

      try {
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, {
          likes: arrayUnion(product),
        });
        console.log("Like added to Firestore:", product);
      } catch (error) {
        console.error("Error adding like to Firestore:", error);
      }
    }
  };

  const removeLike = async (productId) => {
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const currentLikes = userDocSnap.data().likes || [];
          const updatedLikes = currentLikes.filter(
            (product) => product.id !== productId
          );

          await updateDoc(userDocRef, {
            likes: updatedLikes,
          });

          setLikes(updatedLikes);
          console.log("Like removed from Firestore:", productId);
        }
      } catch (error) {
        console.error("Error removing like from Firestore:", error);
      }
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

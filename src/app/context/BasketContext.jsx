"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  runTransaction,
} from "firebase/firestore";
import { auth, db } from "../api/firebaseConfig";

// Create context
const BasketContext = createContext();

// Provider component
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchBasket(user.uid);
      } else {
        setUser(null);
        setBasket([]);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = basket.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalPrice(total.toFixed(2));
    };
    calculateTotalPrice();
  }, [basket]);

  const fetchBasket = async (uid) => {
    const basketRef = doc(db, "users", uid);
    const basketDoc = await getDoc(basketRef);
    if (basketDoc.exists()) {
      setBasket(basketDoc.data().basket || []);
    }
  };

  const addItem = async (item) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find(
        (basketItem) => basketItem.id === item.id
      );
      if (existingItem) {
        return prevBasket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        );
      } else {
        return [...prevBasket, { ...item, quantity: 1 }];
      }
    });

    if (user) {
      const basketRef = doc(db, "users", user.uid);
      await runTransaction(db, async (transaction) => {
        const basketDoc = await transaction.get(basketRef);
        if (!basketDoc.exists()) {
          throw "Document does not exist!";
        }
        const newBasket = basketDoc.data().basket || [];
        const existingItem = newBasket.find(
          (basketItem) => basketItem.id === item.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          newBasket.push({ ...item, quantity: 1 });
        }
        transaction.update(basketRef, { basket: newBasket });
      });
    }
  };

  const removeItem = async (itemId) => {
    setBasket((prevBasket) => {
      const itemToRemove = prevBasket.find((item) => item.id === itemId);
      if (itemToRemove.quantity > 1) {
        return prevBasket.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevBasket.filter((item) => item.id !== itemId);
      }
    });

    if (user) {
      const basketRef = doc(db, "users", user.uid);
      await runTransaction(db, async (transaction) => {
        const basketDoc = await transaction.get(basketRef);
        if (!basketDoc.exists()) {
          throw "Document does not exist!";
        }
        const newBasket = basketDoc.data().basket || [];
        const itemToRemove = newBasket.find((item) => item.id === itemId);
        if (itemToRemove.quantity > 1) {
          itemToRemove.quantity -= 1;
        } else {
          newBasket.splice(newBasket.indexOf(itemToRemove), 1);
        }
        transaction.update(basketRef, { basket: newBasket });
      });
    }
  };

  const clearItem = async (itemId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));

    if (user) {
      const basketRef = doc(db, "users", user.uid);
      await runTransaction(db, async (transaction) => {
        const basketDoc = await transaction.get(basketRef);
        if (!basketDoc.exists()) {
          throw "Document does not exist!";
        }
        const newBasket = basketDoc.data().basket || [];
        const itemIndex = newBasket.findIndex((item) => item.id === itemId);
        if (itemIndex > -1) {
          newBasket.splice(itemIndex, 1);
        }
        transaction.update(basketRef, { basket: newBasket });
      });
    }
  };

  const clearBasket = async () => {
    setBasket([]);

    if (user) {
      const basketRef = doc(db, "users", user.uid);
      await setDoc(basketRef, { basket: [] }, { merge: true });
    }
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        totalPrice,
        addItem,
        removeItem,
        clearBasket,
        clearItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

// Custom hook to use the basket context
export const useBasket = () => {
  return useContext(BasketContext);
};

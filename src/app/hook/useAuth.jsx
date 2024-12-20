"use client";

import { useRouter } from "next/navigation";
import { auth, db } from "../api/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [isOpenSignUp, setisOpenSignUp] = useState(false);
  const [isOpenSignIn, setisOpenSignIn] = useState(false);

  const signUpWithEmailAndPassword = async (email, password, username) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        username: username,
      });
      const userData = await getUserData(user.uid);
      setUser(userData);

      setisOpenSignUp(true);

      const redirectTimeout = setTimeout(() => {
        router.push("/");
      }, 3000);

      return () => {
        clearTimeout(redirectTimeout);
      };
    } catch (error) {
      console.error("Erreur lors de la création du compte:", error);
      setError("Une erreur s'est produite lors de la création du compte. Veuillez réessayer.");
    }
  };

  const signInWithEmailAndPass = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const userData = await getUserData(result.user.uid);
      setUser(userData);

      setisOpenSignIn(true);

      const redirectTimeout = setTimeout(() => {
        router.push("/");
      }, 3000);

      return () => {
        clearTimeout(redirectTimeout);
      };
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
      router.push("/"); // Rediriger vers la page de connexion après la déconnexion
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      setError("Une erreur s'est produite lors de la déconnexion. Veuillez réessayer.");
    }
  };

  const getUserData = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { uid: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUserData(user.uid);
        setUser(userData);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const moveToHome = () => {
    if (user) {
      router.push("/");
    }
  };

  return {
    user,
    error,
    signUpWithEmailAndPassword,
    signInWithEmailAndPass,
    signOut,
    moveToHome,
    isOpenSignUp,
    setisOpenSignUp,
    isOpenSignIn,
    setisOpenSignIn,
  };
}

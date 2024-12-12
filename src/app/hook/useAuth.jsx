import { useRouter } from "next/navigation";
import { auth, db } from "../api/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const providerGoogle = new GoogleAuthProvider();

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, providerGoogle);
      setUser(result.user);
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la connexion avec Google:", error);
      setError(
        "Une erreur s'est produite lors de la connexion avec Google. Veuillez réessayer."
      );
    }
  };

  const signUpWithEmailAndPassword = async (email, password, username) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        username: username,
      });
      setUser(user);
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la création du compte:", error);
      setError(
        "Une erreur s'est produite lors de la création du compte. Veuillez réessayer."
      );
    }
  };

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError(
        "Une erreur s'est produite lors de la connexion. Veuillez réessayer."
      );
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
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
    loginWithGoogle,
    signUpWithEmailAndPassword,
    signInWithEmailAndPassword,
    moveToHome,
  };
}

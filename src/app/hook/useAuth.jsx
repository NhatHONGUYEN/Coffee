import { useRouter } from "next/navigation";
import { auth, db } from "../api/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

const providerGoogle = new GoogleAuthProvider();

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, providerGoogle);
      const userData = await getUserData(result.user.uid);
      if (!userData) {
        // Si l'utilisateur n'existe pas dans la base de données, créez un nouvel utilisateur
        await setDoc(doc(db, "users", result.user.uid), {
          uid: result.user.uid,
          email: result.user.email,
          username: result.user.displayName,
        });
        const newUserData = await getUserData(result.user.uid);
        setUser(newUserData);
      } else {
        setUser(userData);
      }
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
      const userData = await getUserData(user.uid);
      setUser(userData);
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la création du compte:", error);
      setError(
        "Une erreur s'est produite lors de la création du compte. Veuillez réessayer."
      );
    }
  };

  const signInWithEmailAndPass = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const userData = await getUserData(result.user.uid);
      setUser(userData);
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError(
        "Une erreur s'est produite lors de la connexion. Veuillez réessayer."
      );
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
      router.push("/"); // Rediriger vers la page de connexion après la déconnexion
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      setError(
        "Une erreur s'est produite lors de la déconnexion. Veuillez réessayer."
      );
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
    loginWithGoogle,
    signUpWithEmailAndPassword,
    signInWithEmailAndPass,
    signOut, // Ajouter la fonction de déconnexion
    moveToHome,
  };
}

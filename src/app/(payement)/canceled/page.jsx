"use client";

// pages/canceled.js

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Canceled() {
  const router = useRouter();

  useEffect(() => {
    // Rediriger vers la page d'accueil après 3 secondes
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1>Paiement annulé</h1>
      <p>Vous serez redirigé vers la page d'accueil dans 3 secondes...</p>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useRouter, useSearchParams } from "next/navigation";
import convertToSubcurrency from "../utils/convertToSubcurrency";
import CheckoutPage from "./CheckoutPage";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");

  useEffect(() => {
    if (amount) {
      setTotalAmount(parseFloat(amount));

      const amountInCents = convertToSubcurrency(amount);
      if (amountInCents >= 50) {
        fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: amountInCents }),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            console.log("API Response:", data);
            if (data.clientSecret) {
              setClientSecret(data.clientSecret);
            } else {
              setError(
                "Erreur lors de la création du PaymentIntent: " + data.error
              );
            }
            setLoading(false);
          })
          .catch((error) => {
            console.error("Erreur réseau:", error);
            setError("Erreur réseau: " + error.message);
            setLoading(false);
          });
      } else {
        setError(
          "Le montant est inférieur au montant minimum autorisé par Stripe."
        );
        setLoading(false);
      }
    }
  }, [amount]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutPage amount={totalAmount} clientSecret={clientSecret} />
    </Elements>
  );
};

export default Checkout;

"use client";

import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import convertToSubcurrency from "@/app/utils/convertToSubcurrency";

const CheckoutPage = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (amount) {
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
              console.error(
                "Erreur lors de la création du PaymentIntent:",
                data.error
              );
            }
          })
          .catch((error) => {
            console.error("Erreur réseau:", error);
          });
      }
    }
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      router.push(`/success?amount=${amount}`);
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-t-transparent"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
        <PaymentElement />
        {errorMessage && <div>{errorMessage}</div>}
        <button
          disabled={!stripe || loading}
          className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
        >
          {!loading ? `Pay $${amount}` : "Processing..."}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;

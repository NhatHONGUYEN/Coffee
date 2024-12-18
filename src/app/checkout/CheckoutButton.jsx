"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const CheckoutButton = ({ amount, onClose }) => {
  const router = useRouter();

  const handleCheckout = () => {
    if (onClose) {
      onClose(); // Fermer le drawer
    }
    router.push(`/checkout?amount=${amount}`); // Rediriger vers la page de paiement
  };

  return (
    <Button className="w-full mt-4" onClick={handleCheckout}>
      Payer avec Stripe
    </Button>
  );
};

export default CheckoutButton;

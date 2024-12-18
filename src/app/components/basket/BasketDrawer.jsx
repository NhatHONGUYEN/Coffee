"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { useBasket } from "../../context/BasketContext";
import { Button } from "@/components/ui/button";
import BasketDrawerArticles from "./BasketDrawerArticles";

import { useEffect, useState } from "react";
import convertToSubcurrency from "@/app/utils/convertToSubcurrency";
import { useRouter } from "next/navigation";
import CheckoutButton from "@/app/checkout/CheckoutButton";

export default function BasketDrawer({ isOpen, onClose }) {
  const { basket, removeItem, totalPrice } = useBasket();
  const [clientSecret, setClientSecret] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (totalPrice) {
      const amountInCents = convertToSubcurrency(totalPrice);
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
      } else {
        console.error(
          "Le montant est inférieur au montant minimum autorisé par Stripe."
        );
      }
    }
  }, [totalPrice]);

  console.log("totalPrice", totalPrice);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative ">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 z-50  transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden z-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full justify-between flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="mx-auto">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-lg text-center font-semibold pt-12 text-gray-900">
                      Your cart
                    </DialogTitle>
                  </div>
                  <div className="mt-2">
                    {basket.length > 0 ? (
                      <div>
                        <ul>
                          {basket.map((item) => (
                            <BasketDrawerArticles
                              key={item.id}
                              item={item}
                              onRemove={removeItem}
                            />
                          ))}
                        </ul>
                        <div className="flex justify-between mx-auto w-80 pt-10">
                          <span className="italic">Total:</span>{" "}
                          <div>{totalPrice} €</div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm pt-10 text-gray-500">
                        Votre panier est vide.
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <Button className="w-full" onClick={onClose}>
                    Continue to shopping
                  </Button>
                  {basket.length > 0 && (
                    <CheckoutButton amount={totalPrice} onClose={onClose} />
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

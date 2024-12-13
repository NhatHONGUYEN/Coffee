import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useBasket } from "../context/BasketContext";
import BasketDrawerArticles from "./BasketDrawerArticles";
import { Button } from "@/components/ui/button";

export default function BasketDrawer({ isOpen, onClose }) {
  const { basket, removeItem, totalPrice } = useBasket();

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full justify-between flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold py-10 text-gray-900">
                      Votre Panier
                    </DialogTitle>
                  </div>
                  <div className="mt-2 ">
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
                        <div className="font-bold flex justify-between mx-auto w-80 border-t-2 border-gray-300 pt-10">
                          Total: <div>{totalPrice} €</div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm  text-gray-500">
                        Votre panier est vide.
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 ">
                  <Button className="w-full" onClick={onClose}>
                    Continue to shopping
                  </Button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

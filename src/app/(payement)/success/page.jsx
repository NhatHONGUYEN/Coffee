// pages/success.js
"use client";
import { useBasket } from "@/app/context/BasketContext";

export default function Success() {
  const { totalPrice } = useBasket();

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Payment Successful!</h1>
        <h2 className="text-2xl">
          You have successfully paid
          <span className="font-bold"> ${totalPrice}</span>
        </h2>
      </div>
    </main>
  );
}

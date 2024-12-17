import { useBasket } from "@/app/context/BasketContext";
import { ShoppingBasket } from "lucide-react";

export default function ShoppingBasketUser() {
  const { basket } = useBasket();

  return (
    <>
      <ShoppingBasket className="text-pink-700 flex gap-2" />
      <div className="absolute -top-2 -right-2 bg-pink-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {basket.length}
      </div>
    </>
  );
}

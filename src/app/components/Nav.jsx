import { Input } from "@/components/ui/input";
import { Coffee, Search } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { navigation } from "../utils/dataNav";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-full py-4 px-10 flex items-center justify-between ">
      {/* LOGO */}
      <div
        className="flex
       gap-2 items-center cursor-pointer"
      >
        <Coffee className="text-pink-700" />{" "}
        <span className="text-2xl font-bold uppercase">Fake Coffee </span>
      </div>

      {/* INPUT */}
      <div className="flex flex-col  ">
        <div className="flex gap-5 items-center">
          <div className="relative">
            <Input className="pl-9" placeholder="Rechercher des produits" />
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <Search className="h-4" />
            </div>
          </div>

          {/* USER & PANIER */}
          <div className="flex gap-2">
            <User className="text-pink-700" />{" "}
            <span className="uppercase hover:text-pink-700 cursor-pointer ">
              Connexion
            </span>
          </div>
          <div className="flex  gap-2">
            <ShoppingBasket className="text-pink-700" />
            <span className="uppercase hover:text-pink-700 cursor-pointer">
              Panier
            </span>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex gap-4 justify-evenly pt-4 text-md ">
          {navigation.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className=" hover:text-pink-700 cursor-pointer"
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

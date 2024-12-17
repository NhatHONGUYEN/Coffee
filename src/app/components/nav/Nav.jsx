"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Coffee, Search, ShoppingBasket } from "lucide-react";
import { navigation } from "../../utils/dataNav";
import Link from "next/link";
import { useSearch } from "../../context/SearchContext";
import useAuth from "../../hook/useAuth";
import SignInLink from "../../(form)/signIn/SignInLink";
import UserInfo from "../../(form)/signIn/UserInfo";
import BasketDrawer from "../basket/BasketDrawer"; // Importez le composant BasketDrawer
import ShoppingBasketUser from "./ShoppingBasketUser";

export default function Nav() {
  const { searchTerm, setSearchTerm } = useSearch();
  const { user, signOut } = useAuth();
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBasketOpen = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  return (
    <div>
      <div className="w-full py-4 fixed bg-zinc-50 z-20 px-36 flex items-center justify-between ">
        {/* LOGO */}
        <Link href="/" className="flex gap-2 pl-24 items-center cursor-pointer">
          <Coffee className="text-pink-700" />{" "}
          <span className="text-2xl font-semibold tracking-tight text-pretty text-gray-900  uppercase">
            Fake Coffee{" "}
          </span>
        </Link>

        {/* INPUT */}
        <div className="flex flex-col ">
          <div className="flex gap-5 items-center">
            <div className="relative">
              <Input
                className="pl-9 bg-white"
                placeholder="Rechercher des produits"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <Search className="h-4" />
              </div>
            </div>

            {/* USER & PANIER */}

            {user ? <UserInfo user={user} signOut={signOut} /> : <SignInLink />}

            <button onClick={handleBasketOpen} className="flex     gap-2">
              <div className="relative">
                <ShoppingBasketUser />
              </div>

              <span className="  tracking-tight text-pretty text-gray-900  ml-2 hover:text-pink-700 cursor-pointer">
                Panier
              </span>
            </button>
          </div>

          {/* NAVIGATION */}
          <div className="flex mx-auto gap-6 pt-4 text-md italic text-gray-600 ">
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

        {/* BASKET DRAWER */}
        <BasketDrawer
          isOpen={isBasketOpen}
          onClose={() => setIsBasketOpen(false)}
        />
      </div>
      <div className="h-20 w-full bg-white"></div>
    </div>
  );
}

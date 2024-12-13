"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Coffee, Search, ShoppingBasket } from "lucide-react";
import { navigation } from "../utils/dataNav";
import Link from "next/link";
import { useSearch } from "../context/SearchContext";
import useAuth from "../hook/useAuth";
import SignInLink from "../(form)/signIn/SignInLink";
import UserInfo from "../(form)/signIn/UserInfo";
import BasketDrawer from "../components/BasketDrawer"; // Importez le composant BasketDrawer

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
    <div className="w-full py-4 px-10 flex items-center justify-between ">
      {/* LOGO */}
      <Link href="/" className="flex gap-2 items-center cursor-pointer">
        <Coffee className="text-pink-700" />{" "}
        <span className="text-2xl font-bold uppercase">Fake Coffee </span>
      </Link>

      {/* INPUT */}
      <div className="flex flex-col ">
        <div className="flex gap-5 items-center">
          <div className="relative">
            <Input
              className="pl-9"
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

          <button onClick={handleBasketOpen} className="flex gap-2">
            <ShoppingBasket className="text-pink-700" />
            <span className="uppercase hover:text-pink-700 cursor-pointer">
              Panier
            </span>
          </button>
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

      {/* BASKET DRAWER */}
      <BasketDrawer
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
      />
    </div>
  );
}

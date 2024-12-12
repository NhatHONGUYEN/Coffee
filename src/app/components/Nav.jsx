"use client";

import { Input } from "@/components/ui/input";
import { Coffee, Search, User, ShoppingBasket } from "lucide-react";
import { navigation } from "../utils/dataNav";
import Link from "next/link";
import { useSearch } from "../context/SearchContext";
import useAuth from "../hook/useAuth";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const { searchTerm, setSearchTerm } = useSearch();
  const { user, signOut } = useAuth();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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

          {user ? (
            <div className="flex justify-center items-center gap-2">
              <User className="text-pink-700" />{" "}
              <span>
                {user.provider === "google" ? user.email : user.username}
              </span>{" "}
              <Button onClick={signOut}>Deconnexion</Button>
            </div>
          ) : (
            <Link href="/signIn" className="flex gap-2">
              <User className="text-pink-700" />{" "}
              <span className="uppercase hover:text-pink-700 cursor-pointer ">
                Connexion
              </span>
            </Link>
          )}

          <div className="flex gap-2">
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

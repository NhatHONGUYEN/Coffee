import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function UserInfo({ user, signOut }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleDropDown}
        className="flex gap-2 items-center cursor-pointer"
      >
        <User className="text-pink-700" />
        <span>{user.username}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-4 w-56 origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>

            <Link
              href="/likes"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Your Favorites
            </Link>
            <Button
              onClick={signOut}
              className="block px-4 py-2 text-sm  w-full"
            >
              Déconnexion
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

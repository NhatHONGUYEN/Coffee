import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import React from "react";

export default function UserInfo({ user, signOut }) {
  return (
    <div className="flex justify-center items-center gap-2">
      <User className="text-pink-700" />
      <span>{user.username}</span>
      <Button onClick={signOut}>Déconnexion</Button>
    </div>
  );
}

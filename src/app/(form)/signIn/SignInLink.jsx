import { User } from "lucide-react";
import Link from "next/link";

export default function SignInLink() {
  return (
    <Link href="/signIn" className="flex gap-2">
      <User className="text-pink-700" />
      <span className="uppercase hover:text-pink-700 cursor-pointer">
        Connexion
      </span>
    </Link>
  );
}
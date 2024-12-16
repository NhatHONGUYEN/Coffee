import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBasket } from "../context/BasketContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLikes } from "../context/LikesContext";
import useAuth from "../hook/useAuth";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

export default function ProductCard({ product }) {
  const { addItem } = useBasket();
  const { addLike, removeLike, isLiked } = useLikes();
  const { user } = useAuth();

  const handleAddItem = (event) => {
    event.preventDefault(); // Empêche la propagation de l'événement de clic
    addItem(product);
  };

  const handleLike = (event) => {
    event.preventDefault(); // Empêche la propagation de l'événement de clic
    if (user) {
      if (isLiked(product.id)) {
        removeLike(product.id);
      } else {
        addLike(product);
      }
    } else {
      // Rediriger l'utilisateur vers la page de connexion ou afficher un message
      console.log("Veuillez vous connecter pour ajouter des likes.");
    }
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="relative">
        {user && (
          <div className="absolute top-2 right-2">
            <Button
              variant="none"
              className="hover:scale-125"
              onClick={handleLike}
            >
              {isLiked(product.id) ? <FaHeart /> : <FaRegHeart />}
            </Button>
          </div>
        )}
        <CardHeader>
          <img
            className="object-cover hover:scale-125 duration-300 ease-in-out w-full h-48"
            src={product.image_url}
            alt={product.name}
          />
        </CardHeader>
        <CardContent>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription className="pt-2">
            {truncateText(product.description, 30)}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>{product.price} €</p>
          <Button onClick={handleAddItem}>Ajouter</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

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
import Image from "next/image";
import { showSuccessToast } from "../utils/Toast";

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
    showSuccessToast("Added to cart");
  };

  const handleLike = (event) => {
    event.preventDefault(); // Empêche la propagation de l'événement de clic
    if (user) {
      if (isLiked(product.id)) {
        removeLike(product.id);
        showSuccessToast("Removed from favorites");
      } else {
        addLike(product);
        showSuccessToast("Added to favorites");
      }
    }
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="relative shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        {user && (
          <div className="absolute top-2 right-2">
            <Button
              variant="none"
              className="hover:scale-125 z-10"
              onClick={handleLike}
            >
              {isLiked(product.id) ? <FaHeart /> : <FaRegHeart />}
            </Button>
          </div>
        )}
        <CardHeader>
          <Image
            src={product.image_url}
            alt={product.name}
            objectFit="cover"
            width={300}
            height={100}
            className="object-cover "
          />
        </CardHeader>
        <CardContent>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription className="pt-2 text-gray-600 italic">
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

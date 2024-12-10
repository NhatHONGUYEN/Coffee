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

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card>
        <CardHeader>
          <img
            className="object-cover hover:scale-125 duration-300 ease-in-out w-full h-48"
            src={product.image_url}
            alt={product.name}
          />
        </CardHeader>
        <CardContent>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>{product.price} €</p>
          <Button className="bg-black text-white" variant="outline">
            Ajouter
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

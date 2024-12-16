import { classNames } from "@/lib/utils";
import { StarIcon } from "@heroicons/react/20/solid";

export const StarRating = ({ rating, total }) => (
  <div className="flex items-center">
    {[0, 1, 2, 3, 4].map((star) => (
      <StarIcon
        key={star}
        aria-hidden="true"
        className={classNames(
          rating > star ? "text-yellow-400" : "text-gray-300",
          "size-5 shrink-0"
        )}
      />
    ))}
    <p className="sr-only">{rating} out of 5 stars</p>
  </div>
);

import { reviews } from "../../utils/dataReviews";
import { FeaturedReviews } from "./FeaturedReviews";
import { ReviewData } from "./ReviewData";
import { StarRating } from "./StarRating";

export default function Reviews() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customer Reviews
          </h2>
          <div className="mt-3 flex items-center">
            <StarRating rating={reviews.average} />
            <p className="ml-2 text-sm text-gray-900">
              Based on {reviews.totalCount} reviews
            </p>
          </div>
          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>
            <ReviewData
              counts={reviews.counts}
              totalCount={reviews.totalCount}
            />
          </div>
        </div>
        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>
          <FeaturedReviews reviews={reviews.featured} />
        </div>
      </div>
    </div>
  );
}

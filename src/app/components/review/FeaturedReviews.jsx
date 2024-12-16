import { StarRating } from "./StarRating";

export const FeaturedReviews = ({ reviews }) => (
  <div className="flow-root">
    <div className="-my-12 divide-y divide-gray-200">
      {reviews.map((review) => (
        <div key={review.id} className="py-12">
          <div className="flex items-center">
            <img
              alt={`${review.author}.`}
              src={review.avatarSrc}
              className="size-12 rounded-full"
            />
            <div className="ml-4">
              <h4 className="text-sm font-bold text-gray-900">
                {review.author}
              </h4>
              <StarRating rating={review.rating} />
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: review.content }}
            className="mt-4 space-y-6 text-base text-gray-600 italic"
          />
        </div>
      ))}
    </div>
  </div>
);

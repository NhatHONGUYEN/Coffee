import { classNames } from "@/lib/utils";
import { StarIcon } from "@heroicons/react/20/solid";

export const ReviewData = ({ counts, totalCount }) => (
  <dl className="space-y-3">
    {counts.map((count) => (
      <div key={count.rating} className="flex items-center text-sm">
        <dt className="flex flex-1 items-center">
          <p className="w-3 font-medium text-gray-900">
            {count.rating}
            <span className="sr-only"> star reviews</span>
          </p>
          <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
            <StarIcon
              aria-hidden="true"
              className={classNames(
                count.count > 0 ? "text-yellow-400" : "text-gray-300",
                "size-5 shrink-0"
              )}
            />
            <div className="relative ml-3 flex-1">
              <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
              {count.count > 0 && (
                <div
                  style={{
                    width: `calc(${count.count} / ${totalCount} * 100%)`,
                  }}
                  className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                />
              )}
            </div>
          </div>
        </dt>
        <dd className="ml-3 w-10 text-right text-sm text-gray-900 tabular-nums">
          {Math.round((count.count / totalCount) * 100)}%
        </dd>
      </div>
    ))}
  </dl>
);

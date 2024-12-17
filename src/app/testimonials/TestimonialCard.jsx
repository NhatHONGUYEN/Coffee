export default function TestimonialCard({ testimonial }) {
  return (
    <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
      <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
        <blockquote className="text-gray-900">
          <p>{`“${testimonial.body}”`}</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-x-4">
          <img
            alt=""
            src={testimonial.author.imageUrl}
            className="size-10 rounded-full bg-gray-50"
          />
          <div>
            <div className="font-semibold text-gray-900">
              {testimonial.author.name}
            </div>
            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

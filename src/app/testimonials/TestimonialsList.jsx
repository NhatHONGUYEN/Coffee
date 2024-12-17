import TestimonialCard from "./TestimonialCard";

export default function TestimonialsList({ testimonials }) {
  return (
    <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
      <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.author.handle}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

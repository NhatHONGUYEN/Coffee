import { testimonials } from "../utils/dataTestimonials";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsList from "./TestimonialsList";

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TestimonialsHeader />
        <TestimonialsList testimonials={testimonials} />
      </div>
    </div>
  );
}

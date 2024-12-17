"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schemas/contactSchema";
import ContactFormField from "./ContactFormField";
import { Button } from "@/components/ui/button";

export default function RightContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Vous pouvez envoyer les données à votre backend ici
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <ContactFormField
            label="First name"
            id="first-name"
            register={register("firstName")}
            error={errors.firstName}
            autoComplete="given-name"
          />
          <ContactFormField
            label="Last name"
            id="last-name"
            register={register("lastName")}
            error={errors.lastName}
            autoComplete="family-name"
          />
          <ContactFormField
            label="Email"
            id="email"
            register={register("email")}
            error={errors.email}
            type="email"
            autoComplete="email"
          />
          <ContactFormField
            label="Phone number"
            id="phone-number"
            register={register("phoneNumber")}
            error={errors.phoneNumber}
            type="tel"
            autoComplete="tel"
          />
          <ContactFormField
            label="Message"
            id="message"
            register={register("message")}
            error={errors.message}
            type="textarea"
            rows={4}
          />
        </div>
        <div className="mt-8 flex justify-end">
          <Button type="submit">Send message</Button>
        </div>
      </div>
    </form>
  );
}

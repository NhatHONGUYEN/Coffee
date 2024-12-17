// FooterForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeNewsLetter } from "@/app/schemas/subscribeNewsLetter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SuccessAlertFooter from "./SuccessAlertFooter";
import { useRouter } from "next/navigation";

const FooterForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    setIsOpen(true);
    const redirectTimeout = setTimeout(() => {
      setIsOpen(false);
      router.push("/");
    }, 3000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(subscribeNewsLetter),
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 sm:flex sm:max-w-md"
      >
        <label htmlFor="email-address" className="sr-only bg-white">
          Adresse e-mail
        </label>
        <Input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Entrez votre e-mail"
          autoComplete="email"
          {...register("email")}
          className="border p-2"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
          <Button type="submit">S'abonner</Button>
        </div>
      </form>
      <SuccessAlertFooter isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default FooterForm;

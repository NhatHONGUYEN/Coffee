"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schemas/contactSchema";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function RightContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = (data) => {
    console.log("data", data);
    setShowAlert(true);

    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <ContactForm register={register} errors={errors} />
        <div className="mt-8 flex justify-end">
          <Button type="submit">Send message</Button>
        </div>
        {showAlert && (
          <SuccessAlert
            trigger={<Button>Send message</Button>}
            onClose={handleCloseAlert}
          />
        )}
      </div>
    </form>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Coffee } from "lucide-react";
import { useForm } from "react-hook-form";
import loginSchema from "../../schemas/loginSchema"; // Utilisez le schéma de connexion
import useAuth from "@/app/hook/useAuth";
import SuccessAlertSignIn from "./SuccessAlertSignIn";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema), // Utilisez le schéma de connexion
  });

  const { signInWithEmailAndPass, error ,     isOpenSignIn,
    setisOpenSignIn, } = useAuth();

  const onSubmit = async (data) => {
    const { email, password } = data;

    await signInWithEmailAndPass(email, password);
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Coffee className="text-pink-700 mx-auto h-10 w-auto" />
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 border rounded-md sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className=" px-6 py-12 shadow-md sm:rounded-lg sm:px-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <Input {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <Input type="password" {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
            </div>

            <div className="flex items-center justify-between"></div>

            <div>
              <Button className="w-full " type="submit">
                Sign in
              </Button>
            </div>
            <SuccessAlertSignIn isOpen={isOpenSignIn} onOpenChange={setisOpenSignIn} />
          </form>

          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </>
  );
}

"use client";

import { Coffee } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";
import userSchema from "../../schemas/userSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const { signUpWithEmailAndPassword } = useAuth();

  const onSubmit = async (data) => {
    const { username, email, password } = data;
    await signUpWithEmailAndPassword(email, password, username);
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Coffee className="text-pink-700 mx-auto h-10 w-auto" />
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 border rounded-md sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow-md sm:rounded-lg sm:px-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <Input {...register("username")} />
                {errors.username && <p>{errors.username.message}</p>}
              </div>
            </div>

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
              <Button className="w-full hover:bg-pink-700 " type="submit">
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

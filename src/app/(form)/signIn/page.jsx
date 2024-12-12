import SignInForm from "@/app/components/SignInForm";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <SignInForm />
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <Link
            href="/signUp"
            className="font-semibold text-pink-600 hover:text-pink-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}

import SignUpForm from "@/app/(form)/signUp/SignUpForm";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <SignUpForm />
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already have an account?{" "}
          <Link
            href="/signIn"
            className="font-semibold text-pink-600 hover:text-pink-500"
          >
            {" "}
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}

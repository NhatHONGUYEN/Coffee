import Link from "next/link";

export default function RenderNoLikes() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            You haven't liked any products yet.
          </h1>
          <p className="mt-4 text-gray-500">
            Why not explore our collection and add some products to your likes?
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded bg-pink-700 px-5 py-3 text-sm font-medium text-white hover:bg-pink-600 focus:outline-none "
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

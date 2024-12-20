import { posts } from "@/app/utils/dataPosts";
import Link from "next/link";

export default async function Page({ params }) {
  const id = (await params).id;
  const post = posts.find((post) => post.href === `/blog/${id}`);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
        
            <img src={post.imageUrl} alt={post.title} />
       
          </div>
          <div>
            <div className="text-base/7 text-gray-700 lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">  {post.title}</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              <p>{post.author.name} - {post.author.role}</p>
            
              </h1>
              <div className="max-w-xl">
              <p>{post.story}</p>
              </div>
            </div>
          
            <div className="mt-10 flex">
              <Link href="/blog" className="text-base/7 font-semibold text-indigo-600">
                Go Back <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




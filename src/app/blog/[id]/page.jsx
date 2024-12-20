import { posts } from "@/app/utils/dataPosts";
import Image from "next/image";
import Link from "next/link";

export default async function BlogDetails({ params }) {
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
        
            <Image width={400} height={200} className="rounded-xl shadow-2xl"  src={post.imageUrl} alt={post.title} />
       
          </div>
          <div>
            <div className="text-base/7 text-gray-700 lg:max-w-lg">
              <p className="text-base/7 font-semibold text-pink-700">  {post.title}</p>
             
              <h1 className="font-semibold text-gray-900 mt-2 text-4xl sm:text-5xl">{post.author.name}  </h1>
              <p className="italic text-gray-400">{post.author.role}, <span>{post.datetime}  </span></p>
         
           
              <div className="max-w-xl mt-6">
              <p>{post.story}</p>
              </div>
            </div>
          
            <div className="mt-10 flex">
              <Link href="/blog" className="text-base/7 font-semibold text-pink-700">
                Go Back <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




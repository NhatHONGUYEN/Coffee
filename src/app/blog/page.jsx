import { posts } from "../utils/dataPosts";
import BlogHeader from "./BlogHeader";
import BlogPostList from "./BlogPostList";

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <BlogHeader />
          <BlogPostList posts={posts} />
        </div>
      </div>
    </div>
  );
}

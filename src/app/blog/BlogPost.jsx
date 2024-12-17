import BlogPostContent from "./BlogPostContent";
import BlogPostImage from "./BlogPostImage";

export default function BlogPost({ post }) {
  return (
    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
      <BlogPostImage imageUrl={post.imageUrl} />
      <BlogPostContent post={post} />
    </article>
  );
}

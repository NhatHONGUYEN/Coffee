import BlogPostAuthor from "./BlogPostAuthor";
import BlogPostDescription from "./BlogPostDescription";
import BlogPostMeta from "./BlogPostMeta";
import BlogPostTitle from "./BlogPostTitle";

export default function BlogPostContent({ post }) {
  return (
    <div>
      <BlogPostMeta post={post} />
      <BlogPostTitle post={post} />
      <BlogPostDescription description={post.description} />
      <BlogPostAuthor author={post.author} />
    </div>
  );
}

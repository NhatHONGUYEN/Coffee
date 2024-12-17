import BlogPost from "./BlogPost";

export default function BlogPostList({ posts }) {
  return (
    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

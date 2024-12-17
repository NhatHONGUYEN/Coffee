export default function BlogPostTitle({ post }) {
  return (
    <div className="group relative max-w-xl">
      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
        <a href={post.href}>
          <span className="absolute inset-0" />
          {post.title}
        </a>
      </h3>
    </div>
  );
}

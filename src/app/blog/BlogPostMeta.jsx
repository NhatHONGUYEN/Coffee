export default function BlogPostMeta({ post }) {
  return (
    <div className="flex items-center gap-x-4 text-xs">
      <time dateTime={post.datetime} className="text-gray-500">
        {post.date}
      </time>
      <a
        href={post.category.href}
        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
      >
        {post.category.title}
      </a>
    </div>
  );
}

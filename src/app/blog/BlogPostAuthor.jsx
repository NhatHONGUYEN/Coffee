export default function BlogPostAuthor({ author }) {
  return (
    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
      <div className="relative flex items-center gap-x-4">
        <img
          alt={author.name}
          src={author.imageUrl}
          className="size-10 rounded-full bg-gray-50"
        />
        <div className="text-sm/6">
          <p className="font-semibold text-gray-900">
            <a href={author.href}>
              <span className="absolute inset-0" />
              {author.name}
            </a>
          </p>
          <p className="text-gray-600">{author.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function BlogPostImage({ imageUrl }) {
  return (
    <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
      <img
        alt=""
        src={imageUrl}
        className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
    </div>
  );
}

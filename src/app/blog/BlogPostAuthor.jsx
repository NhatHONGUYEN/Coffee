import Image from "next/image";

export default function BlogPostAuthor({ author }) {
  return (
    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
      <div className="relative flex items-center gap-x-4">
        <Image

        width={40}
        height={40}
          alt={author.name}
          src={author.imageUrl}
          className="size-10 object-cover rounded-full bg-gray-50"
        />
        <div className="text-sm/6">
          <div className="font-semibold text-gray-900">
     
              <span className="absolute inset-0" />
              {author.name}
      
          </div>
          <p className="text-gray-600">{author.role}</p>
        </div>
      </div>
    </div>
  );
}

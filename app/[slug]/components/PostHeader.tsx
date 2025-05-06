import PostType from "@/types/post"
import dayjs from "dayjs"
import Image from "next/image"

export default function PostHeader({ post }: { post: PostType }) {
  const dateString = dayjs(post.date).format("MMMM D, YYYY")

  return (
    <div className="mb-8">
      <h1 className="text-2xl sm:text-5xl font-semibold leading-tight mb-2">
        {post.title}
      </h1>
      {post.author ? (
        <div className="text-base text-dark-gray mb-8">
          By{" "}
          <a
            className="text-green font-medium"
            href={post.author?.url}
            target="_blank"
          >
            {post.author?.name}
          </a>
        </div>
      ) : (
        <div className="text-base text-dark-gray mb-8">{dateString}</div>
      )}
      {post.coverImage && (
        <div className="w-full aspect-video relative">
          <Image
            fill={true}
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            className="object-cover"
          />
        </div>
      )}
    </div>
  )
}

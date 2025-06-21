import PostType from "@/types/post"
import dayjs from "dayjs"
import Image from "next/image"

export default function PostHeader({ post }: { post: PostType }) {
  const dateString = dayjs(post.date).format("MMMM D, YYYY")

  return (
    <div className="mb-8">
      <h1 className="text-2xl sm:text-4xl font-semibold leading-tight mb-2">
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
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="header-img"
          src={
            process.env.NODE_ENV === "production"
              ? `/blog/${post.coverImage}`
              : post.coverImage
          }
          alt={`Cover image for ${post.title}`}
        />
      )}
    </div>
  )
}

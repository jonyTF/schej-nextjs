import PostType from "@/types/post"
import dayjs from "dayjs"

export default function Header({ post }: { post: PostType }) {
  const dateString = dayjs(post.date).format("MMMM D, YYYY")

  return (
    <div className="mb-8">
      <h1 className="text-5xl font-semibold leading-tight mb-2">
        {post.title}
      </h1>
      <div className="text-dark-gray">{dateString}</div>
    </div>
  )
}

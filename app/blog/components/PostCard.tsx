import PostType from "@/types/post"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"

interface Props {
  post: PostType
}

export default function PostCard({ post }: Props) {
  if (!post.coverImage || !post.slug) return null

  const dateString = dayjs(post.date).format("MMMM D, YYYY")

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-white drop-shadow rounded overflow-hidden">
        <div className="w-full aspect-video relative">
          <Image
            src={post.coverImage!}
            alt={`Cover image for ${post.title}`}
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="p-4 h-32 flex flex-col">
          <div className="text-xl font-semibold mb-2 flex-1">{post.title}</div>
          <div className="text-base text-dark-gray">{dateString}</div>
        </div>
      </div>
    </Link>
  )
}

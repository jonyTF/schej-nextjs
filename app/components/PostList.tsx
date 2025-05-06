import PostType from "@/types/post"
import PostCard from "./PostCard"

interface Props {
  posts: PostType[]
}

export default function PostList({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

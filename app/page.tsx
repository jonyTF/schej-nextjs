import { getAllPosts } from "@/lib/posts"
import PostList from "./components/PostList"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Schej",
  description: "Sharing tips and tricks for group event scheduling",
}

export default function BlogHome() {
  const posts = getAllPosts(["slug", "title", "date", "coverImage"])
  posts.sort(
    (a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()
  )

  return (
    <div className="max-w-6xl m-auto">
      <h1 className="text-2xl font-bold mb-8">Featured posts</h1>
      <PostList posts={posts} />
    </div>
  )
}

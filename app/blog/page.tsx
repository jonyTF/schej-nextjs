import { getAllPosts } from "@/lib/posts"
import PostList from "./components/PostList"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Schej",
}

export default function BlogHome() {
  const posts = getAllPosts(["slug", "title", "date", "coverImage"])

  return (
    <div className="max-w-6xl m-auto">
      <h1 className="text-2xl font-bold mb-8">Featured posts</h1>
      <PostList posts={posts} />
    </div>
  )
}

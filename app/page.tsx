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
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-xl sm:text-3xl font-medium mb-16">
        Welcome to the Schej blog!
      </h1>
      <PostList posts={posts} />
    </div>
  )
}

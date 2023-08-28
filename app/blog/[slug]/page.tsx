import markdownToHtml, { getAllPosts, getPostBySlug } from "@/lib/posts"
import Header from "./components/Header"
import PostType from "@/types/post"

interface PostProps {
  params: { slug: string }
}

export default async function Post({ params }: PostProps) {
  const post: PostType = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]) as unknown as PostType
  post.content = await markdownToHtml(post.content || "")

  return (
    <div>
      <Header post={post} />
      <div
        className="leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

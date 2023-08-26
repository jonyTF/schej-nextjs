import markdownToHtml, { getAllPosts, getPostBySlug } from "@/lib/posts"

interface PostProps {
  params: { slug: string }
}

export default async function Post({ params }: PostProps) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])
  post.content = await markdownToHtml(post.content || "")

  return (
    <div>
      <h1 className="text-5xl font-semibold">{post.title}</h1>
      <small>{post.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

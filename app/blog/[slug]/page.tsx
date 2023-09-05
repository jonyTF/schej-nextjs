import markdownToHtml, { getAllPosts, getPostBySlug } from "@/lib/posts"
import PostHeader from "./components/PostHeader"
import { Metadata, ResolvingMetadata } from "next"

interface Props {
  params: { slug: string }
}

export default async function Post({ params }: Props) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ])
  post.content = await markdownToHtml(post.content || "")

  return (
    <>
      <div>
        <PostHeader post={post} />
        <div
          className="leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  )
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getPostBySlug(params.slug, ["title", "ogImage"])

  const title = `${post.title} | Schej`

  return {
    title,
    openGraph: {
      images: [post.ogImage!],
    },
  }
}

export const dynamic = "error"
export const dynamicParams = false

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

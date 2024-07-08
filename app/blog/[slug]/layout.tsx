import { getPostBySlug } from "@/lib/posts"
import Footer from "./components/Footer"

export default function PostLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug, ["showFooter"])
  const showFooter = post.showFooter === undefined ? true : post.showFooter

  return (
    <div>
      <div className="max-w-3xl mx-auto mb-12">{children}</div>
      {showFooter && <Footer />}
    </div>
  )
}

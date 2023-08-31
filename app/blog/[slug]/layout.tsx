import Footer from "./components/Footer"

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="max-w-3xl mx-auto mb-12">{children}</div>
      <Footer />
    </div>
  )
}

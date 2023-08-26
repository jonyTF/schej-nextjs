export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="max-w-3xl mx-auto">{children}</div>
}

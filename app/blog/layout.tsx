import Image from "next/image"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center gap-4 mb-16">
        <Image
          src="/schej_logo_with_text.png"
          width={30 * (171 / 55)}
          height={30}
          alt="Schej logo"
          objectFit="contain"
        />
        <div className="flex-grow" />
        <div>How it works</div>
        <div>Blog</div>
        <div className="flex-grow" />
        <div>Sign in</div>
      </div>
      {children}
    </div>
  )
}

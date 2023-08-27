import Image from "next/image"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex items-center gap-4 mb-16">
        <Image
          src="/schej_logo_with_text.png"
          width={29 * (171 / 55)}
          height={29}
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

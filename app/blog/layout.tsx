import Header from "./components/Header"
import MobileHeader from "./components/MobileHeader"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="p-5">
      <div className="max-w-6xl mx-auto">
        <div className="hidden sm:block">
          <Header />
        </div>
        <div className="block sm:hidden">
          <MobileHeader />
        </div>
      </div>
      {children}
    </div>
  )
}

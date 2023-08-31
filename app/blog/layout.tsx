import MuiComponent from "@/components/MuiComponent"
import { Button } from "@mui/material"
import Image from "next/image"
import schejLogo from "@/public/schej_logo_with_text.png"
import Link from "next/link"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="p-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Link href="https://schej.it">
            <div className="relative w-[70px] sm:w-[90px]">
              <Image src={schejLogo} alt="Schej logo" />
            </div>
          </Link>
          <div className="flex-grow" />
          <Link href="https://schej.it/#how-it-works">
            <MuiComponent component={Button} variant="text">
              How it works
            </MuiComponent>
          </Link>
          <Link href="/blog">
            <MuiComponent component={Button} variant="text">
              Blog
            </MuiComponent>
          </Link>
          <MuiComponent component={Button} variant="contained" color="primary">
            Sign in
          </MuiComponent>
        </div>
      </div>
      {children}
    </div>
  )
}

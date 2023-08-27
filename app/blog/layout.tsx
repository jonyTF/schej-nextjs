import MuiComponent from "@/components/MuiComponent"
import { Button } from "@mui/material"
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
        />
        <div className="flex-grow" />
        <MuiComponent component={Button} variant="text">
          How it works
        </MuiComponent>
        <MuiComponent component={Button} variant="text">
          Blog
        </MuiComponent>
        <div className="flex-grow" />
        <MuiComponent component={Button} variant="text">
          Sign in
        </MuiComponent>
      </div>
      {children}
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import timefulLogo from "@/public/timeful_logo_with_text.png"
import MuiComponent from "@/components/MuiComponent"
import { Button } from "@mui/material"

export default function Header() {
  return (
    <div className="z-10 p-5 fixed top-0 left-0 bg-white right-0 mb-16">
      <div className="flex items-center gap-4 max-w-6xl mx-auto">
        <Link href="/">
          <div className="relative w-[70px] sm:w-[90px]">
            <Image src={timefulLogo} alt="Timeful logo" />
          </div>
        </Link>
        <div className="flex-grow" />
        <Link href="https://timeful.app">
          <MuiComponent component={Button} variant="contained" color="primary">
            Get started
          </MuiComponent>
        </Link>
      </div>
    </div>
  )
}

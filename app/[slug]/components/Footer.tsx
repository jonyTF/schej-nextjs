import MuiComponent from "@/components/MuiComponent"
import { Button } from "@mui/material"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-full bg-green px-8 py-12 rounded-3xl flex flex-col items-center">
      <div className="text-white text-2xl sm:text-3xl font-bold mb-8">
        Find a time to meet with Schej
      </div>
      <Link href="https://schej.it">
        <MuiComponent
          component={Button}
          variant="outlined"
          className="text-white"
          size="large"
        >
          Let&apos;s schej it!
        </MuiComponent>
      </Link>
    </div>
  )
}

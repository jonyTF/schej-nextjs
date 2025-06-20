import MuiComponent from "@/components/MuiComponent"
import { Button } from "@mui/material"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-full bg-green px-4 sm:px-8 py-8 sm:py-12 rounded-lg flex flex-col items-center">
      <div className="text-center text-white text-2xl sm:text-3xl font-medium mb-8">
        Find a time to meet with Timeful
      </div>
      <Link href="https://timeful.app">
        <MuiComponent
          component={Button}
          variant="outlined"
          className="text-white"
          size="large"
        >
          Get started
        </MuiComponent>
      </Link>
    </div>
  )
}

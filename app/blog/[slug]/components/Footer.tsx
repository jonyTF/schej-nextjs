import MuiComponent from "@/components/MuiComponent"
import { Button } from "@mui/material"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-full bg-green px-8 py-12 rounded-3xl flex flex-col items-center">
      <div className="text-white text-3xl font-bold mb-8">
        Easily find a time that works for everybody with Schej
      </div>
      <Link href="https://schej.it">
        <MuiComponent
          component={Button}
          variant="outlined"
          className="text-white"
          size="large"
        >
          Get started for free
        </MuiComponent>
      </Link>
    </div>
  )
}

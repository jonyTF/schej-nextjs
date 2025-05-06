"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import schejLogo from "@/public/schej_logo_with_text.png"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"
import { Button, IconButton } from "@mui/material"
import MuiComponent from "@/components/MuiComponent"

export default function MobileHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex items-center gap-4">
        <Link href="/">
          <div className="relative w-[70px] sm:w-[90px]">
            <Image src={schejLogo} alt="Schej logo" />
          </div>
        </Link>
        <div className="flex-grow" />
        <IconButton onClick={() => setOpen(!open)}>
          <Icon path={mdiMenu} size={1} />
        </IconButton>
      </div>
      <div className="relative mb-16">
        {open && (
          <div className="absolute flex flex-col bg-white left-0 right-0 p-2 gap-2 z-30">
            <Link href="/blog">
              <MuiComponent component={Button} className="w-full text-left">
                Blog
              </MuiComponent>
            </Link>
            <Link href="/#how-it-works">
              <MuiComponent component={Button} className="w-full">
                How it works
              </MuiComponent>
            </Link>
            <Link href="/">
              <MuiComponent
                component={Button}
                variant="contained"
                color="primary"
                className="w-full"
              >
                Sign in
              </MuiComponent>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

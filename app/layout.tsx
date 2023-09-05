import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <CssBaseline />
        {children}
      </body>
    </html>
  )
}

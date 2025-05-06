import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import "@/styles/globals.css"
import { DM_Sans } from "next/font/google"
import { PHProvider, PostHogPageview } from "./providers"
import { Suspense } from "react"
import Header from "./components/Header"

export const dmSans = DM_Sans({
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
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body className={dmSans.className}>
          <CssBaseline />
          <Header />
          <div className="pt-[150px] px-5 pb-5">{children}</div>
        </body>
      </PHProvider>
    </html>
  )
}

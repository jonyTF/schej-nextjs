import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import "@/styles/globals.css"
import { DM_Sans } from "next/font/google"
import { PHProvider, PostHogPageview } from "./providers"
import { Suspense } from "react"
import Header from "./components/Header"
import MobileHeader from "./components/MobileHeader"

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
        </body>
      </PHProvider>
    </html>
  )
}

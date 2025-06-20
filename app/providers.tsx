// app/providers.tsx
"use client"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    autocapture: {
      url_allowlist: [
        // /http:\/\/localhost:3000\/blog.*/,
        /https:\/\/schej\.it\/blog.*/,
        /https:\/\/timeful\.app\/blog.*/,
      ],
    },
  })
}

export function PostHogPageview(): JSX.Element {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && pathname.startsWith("/blog")) {
      let url = window.origin + pathname
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture("$pageview", {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return <></>
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

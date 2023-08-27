"use client"

import { ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#00994C",
    },
  },
})

export default function SchejThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

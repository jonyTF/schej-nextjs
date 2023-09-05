"use client"

import { dmSans } from "@/app/layout"
import { ThemeProvider, createTheme } from "@mui/material"

let theme = createTheme({
  typography: {
    fontFamily: dmSans.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#00994C",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "inherit",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
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

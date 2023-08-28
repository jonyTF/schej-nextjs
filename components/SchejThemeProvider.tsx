"use client"

import { ThemeProvider, createTheme } from "@mui/material"

let theme = createTheme({
  typography: {
    fontFamily: ["DM Sans"].join(","),
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

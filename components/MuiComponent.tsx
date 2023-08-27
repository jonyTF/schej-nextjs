"use client"

import React from "react"
import SchejThemeProvider from "./SchejThemeProvider"

export default function MuiComponent<
  T extends React.FC<any> | React.ComponentClass<any>
>({ component, ...props }: { component: T } & React.ComponentProps<T>) {
  const Component = component
  return (
    <SchejThemeProvider>
      <Component {...props} />
    </SchejThemeProvider>
  )
}

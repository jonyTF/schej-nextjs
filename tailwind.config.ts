import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "pale-green": "#CDEBDC",
      "light-green": "#29BC68",
      green: "#00994C",
      "dark-green": "#1C7D45",
      "light-blue": "#6FACCF",
      blue: "#2F80ED",
      white: "#FFFFFF",
      "off-white": "#F2F2F2",
      black: "#000000",
      gray: "#BDBDBD",
      "dark-gray": "#7E7E7E",
      "very-dark-gray": "#4F4F4F",
      "light-gray": "#f3f4f6",
      "light-gray-stroke": "#dfdfdf",
      red: "#B13C3C",
      "bright-red": "#DB1616",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
export default config

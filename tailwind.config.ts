import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "main-bg": "#222933",
      "secondary-bg": "#191f28",
      "dark-bg": "#131a20",
      "main-text": "rgb(165, 187, 220)",
      "secondary-text": "rgb(153, 177, 212)",
    },
    extend: {
      fontSize: {
        xs: "12px",
      },
    },
  },
  plugins: [],
};
export default config;

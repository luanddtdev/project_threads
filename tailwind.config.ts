import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontSize: {
        "30-bold": [
          "30px",
          {
            fontWeight: 700,
            lineHeight: "140%"
          }
        ]
      },
      colors: {}
    }
  },
  plugins: []
}
export default config
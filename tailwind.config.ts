import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

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
        ],
        "24-bold": [
          "24px",
          {
            fontWeight: 700,
            lineHeight: "140%"
          }
        ]
      },
      colors: {
        color: {
          1: "#121417",
          2: "#1F1F22",
          3: "#877EFF",
          4: "#EFEFEF"
        }
      },
      screens: {
        xs: "400px"
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({})
      addComponents({
        ".flex-between": {
          "@apply flex justify-between items-center": {}
        }
      })
      addUtilities({})
    })
  ]
}
export default config
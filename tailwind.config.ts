import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
    darkMode: ["class"],
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
				],
				"20-medium": [
					"20px",
					{
						fontWeight: 500,
						lineHeight: "140%"
					}
				],
				"16-semibold": [
					"16px",
					{
						fontWeight: 600,
						lineHeight: "140%"
					}
				],
				"16-normal": [
					"16px",
					{
						fontWeight: 400,
						lineHeight: "140%"
					}
				],
				"12-medium": [
					"12px",
					{
						fontWeight: 500,
						lineHeight: "16px"
					}
				]
			},
			colors: {
				color: {
					1: "#121417",
					2: "#1F1F22",
					3: "#877EFF",
					4: "#EFEFEF",
					5: "rgba(16, 16, 18, 0.6)",
					6: "#0095F6",
					7: "#101012"
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
				},
				".flex-center": {
					"@apply flex justify-center items-center": {}
				}
			})
			addUtilities({})
		})
	]
}
export default config
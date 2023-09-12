/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			height: {
				screen: "100dvh",
			},
			backgroundImage: (theme) => ({
				homeBg: "url('data/assets/png/bg-proj.png')",
			}),
			// Define animation class
			animation: {
				"ltr-linear-infinite": "move-bg 60s linear infinite",
			},
			// Define keyframes
			keyframes: {
				"move-bg": {
					"0%": { "background-position": "0 0" },
					"100%": { "background-position": "0 -100dvh" },
				},
			},
		},
	},
	plugins: [],
};

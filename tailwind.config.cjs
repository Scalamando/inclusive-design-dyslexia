const plugin = require("tailwindcss/plugin");

/** @type{import('tailwindcss').Config}*/
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				dark: {
                    light: "#686ea1",
					DEFAULT: "#3d3b6b",
				},
				light: "#f4e8df",
				"accent-red": "#ef9c9d",
				"accent-orange": "#f2b19b",
			},
            fontFamily: {
                "title": "Merriweather Sans, sans-serif"
            }
		},
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				".aside-link-active": {
					fontWeight: theme("fontWeight.semibold"),
					backgroundSize: "100% 3px",
					transform: "translate(-1rem)",
					opacity: 1,
				},
			});
		}),
	],
};


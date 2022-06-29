/** @type{import('tailwindcss').Config}*/
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#3d3b6b",
        light: "#f4e8df",
        "accent-red": "#ef9c9d",
        "accent-orange": "#f2b19b",
        "accent-green": "#87D378",
      },
    },
  },
  plugins: [],
};

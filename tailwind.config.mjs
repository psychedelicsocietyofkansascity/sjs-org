/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#272129",
        violet: {
          deep: "#3d245d",
          dusk: "#5f3a7f",
          mist: "#eee7f4"
        },
        sanctuary: {
          paper: "#f8f3ea",
          linen: "#efe5d7",
          amber: "#d38b42",
          sage: "#789076",
          moss: "#405943",
          rose: "#b76455",
          charcoal: "#272129"
        }
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Source Sans 3", "Aptos", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgb(39 33 41 / 0.12)"
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#f8efe4",
        sjs: {
          bg: "#0b0810",
          surface: "#17111f",
          "surface-2": "#21182b",
          border: "#3a2f45",
          cream: "#fff2dc",
          text: "#f8efe4",
          muted: "#c9bdb1",
          purple: "#a970dd",
          "purple-dark": "#6d3fa3",
          orange: "#f2a044",
          green: "#b9d6a0"
        },
        violet: {
          deep: "#6d3fa3",
          dusk: "#a970dd",
          mist: "#21182b"
        },
        sanctuary: {
          paper: "#0b0810",
          linen: "#17111f",
          amber: "#f2a044",
          sage: "#b9d6a0",
          moss: "#b9d6a0",
          rose: "#b76455",
          charcoal: "#0b0810"
        }
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Source Sans 3", "Aptos", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgb(0 0 0 / 0.25)"
      }
    }
  },
  plugins: []
};

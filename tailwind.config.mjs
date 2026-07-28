/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
    extend: {
      colors: {
        forest: {
          50: "#edf3ee",
          100: "#d7e4d9",
          300: "#8fad97",
          500: "#496f55",
          700: "#244734",
          900: "#102a20"
        },
        cream: "#f7f1e7",
        ivory: "#fbf8f1",
        gold: {
          muted: "#b8995f",
          deep: "#6f5528"
        },
        stone: {
          100: "#eee8dd",
          200: "#ded5c6",
          400: "#a99f91",
          600: "#746b60"
        },
        charcoal: "#242522"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem"
      },
      maxWidth: {
        measure: "42rem",
        editorial: "78rem",
        site: "88rem"
      },
      borderRadius: {
        soft: "0.375rem"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 42, 32, 0.08)"
      }
    }
  },
  plugins: []
};

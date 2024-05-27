/* eslint-disable prettier/prettier */
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },

      colors: {
        amareloFood: "#fca012",
        amarelo: {
          50: "#fff6e7", // orangeLight
          100: "#fff1db", // orangeLightHover
          200: "#fee2b6", // orangeLightActive
          300: "#fca012", // orangeNormal
          400: "#e39010", // orangeNormalHover
          500: "#ca800e", // orangeNormalActive
          600: "#bd780e", // orangeDark
          700: "#97600b", // orangeDarkHover
          800: "#714808", // orangeDarkActive
          900: "#583806", // orangeDarker
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        rotion: {
          50: "#ebeaed",
          100: "#c1bfc7",
          200: "#a3a0ac",
          300: "#797486",
          400: "#5f596e",
          500: "#37304a",
          600: "#322c43",
          700: "#272235",
          800: "#1e1a29",
          900: "#17141f",
        },
        colorsGraphics: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
        },
      },

      keyframes: {
        slideIn: {
          from: { width: 0 },
          to: { width: "var(--radix-collapsible-content-width)" },
        },

        slideOut: {
          from: { width: "var(--radix-collapsible-content-width)" },
          to: { width: 0 },
        },
      },

      animation: {
        slideIn: "slideIn 0.25s",
        slideOut: "slideOut 0.25s",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),

    plugin(({ addUtilities }) => {
      addUtilities({
        ".region-drag": {
          "-webkit-app-region": "drag",
        },
        ".region-no-drag": {
          "-webkit-app-region": "no-drag",
        },
      });
    }),
  ],
};

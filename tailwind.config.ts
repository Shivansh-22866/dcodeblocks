import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'deep-purple': '#4B0082',
        'dark-orchid': '#9932CC',
        'light-orchid': '#C7B8EA',
        'pale-lavender': '#DCD0FF',
      },
      animation: {
        "move-left": 'move-left 1s linear infinite',
        scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
          'move-left': {
              '0%': {
                  transform: 'translateX(0%)'
              },
              '100%': {
                  transform: 'translateX(-50%)'
              }
          },
          scroll: {
            to: {
              transform: "translate(calc(-50% - 0.5rem))",
            },
          },
      }
    },
  },
  plugins: [
    addVariablesForColors,
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

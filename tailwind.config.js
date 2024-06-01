/** @type {import('tailwindcss').Config} */

const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist:[
    {
      pattern: /from-\[#]?[a-fA-F0-9]{6}\]/,
    },
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
        "animation": {
          shimmer: "shimmer 2s linear infinite",
          "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        },
        colors: {
          dark_purple: {
            DEFAULT: '#242038',
            100: '#07060b',
            200: '#0e0d16',
            300: '#151321',
            400: '#1c192c',
            500: '#242038',
            600: '#463f6d',
            700: '#695ea2',
            800: '#9b93c1',
            900: '#cdc9e0',
          },
          amethyst: {
            DEFAULT: '#9067c6',
            100: '#1c112c',
            200: '#392157',
            300: '#553283',
            400: '#7142af',
            500: '#9067c6',
            600: '#a686d1',
            700: '#bda4dc',
            800: '#d3c2e8',
            900: '#e9e1f3',
          },
          tropical_indigo: {
            DEFAULT: '#8d86c9',
            100: '#17152e',
            200: '#2f2a5d',
            300: '#463f8b',
            400: '#6259b4',
            500: '#8d86c9',
            600: '#a59fd4',
            700: '#bbb7df',
            800: '#d2cfe9',
            900: '#e8e7f4',
          },
          french_gray: {
            DEFAULT: '#cac4ce',
            100: '#29252c',
            200: '#524958',
            300: '#7b6e84',
            400: '#a399aa',
            500: '#cac4ce',
            600: '#d5d0d8',
            700: '#dfdce2',
            800: '#eae8ec',
            900: '#f4f3f5',
          },
          linen: {
            DEFAULT: '#f7ece1',
            100: '#4b2f14',
            200: '#965f28',
            300: '#d08e4d',
            400: '#e4be98',
            500: '#f7ece1',
            600: '#f9f1e8',
            700: '#fbf4ee',
            800: '#fcf8f4',
            900: '#fefbf9',
          },
        },
        "keyframes": {
          shimmer: {
            from: {
              "backgroundPosition": "0 0"
            },
            to: {
              "backgroundPosition": "-200% 0"
            }
          },
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
      }
    },
  },
  plugins: [require("tailwindcss-animate"),
  require('@tailwindcss/typography'),
  addVariablesForColors,
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-grid-small": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-dot": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },
],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
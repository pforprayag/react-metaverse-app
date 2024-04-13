/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00c2ff",
        },
        secondary: {
          DEFAULT: "#dd0bff",
        },
        dark: "#111111"
      },
      fontFamily: {
        montserrat: ["Martian Mono", "monospace"],
      },
      container:{
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
        center: true,
      }
    },
  },
  plugins: [],
}


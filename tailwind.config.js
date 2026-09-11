/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#06152D", light: "#0B2F66" }, 
        steel: { DEFAULT: "#5C7290", light: "#8FA3BE" }, 
        accent: { DEFAULT: "#1F5FA8", dark: "#003F5C", light: "#5B8FCC" },
        paper: "#F0F3F7", 
        tag: "#F8FAFC", 
        signal: "#D9A404", 
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};

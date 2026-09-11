/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // --- NORMA v4 design tokens — παλέτα επιλογής χρήστη ---
        ink: { DEFAULT: "#06152D", light: "#0B2F66" }, // βαθύ ανθρακί-μπλε — κύριο σκούρο
        steel: { DEFAULT: "#5C7290", light: "#8FA3BE" }, // γαλάζιο-γκρι — δευτερεύον κείμενο/γραμμές
        accent: { DEFAULT: "#1F5FA8", dark: "#003F5C", light: "#5B8FCC" }, // κύριο μπλε accent (κουμπιά, tags, links)
        paper: "#F0F3F7", // ψυχρό ανοιχτό φόντο
        tag: "#F8FAFC", // πιο ανοιχτό — φόντο των "ετικετών"
        signal: "#D9A404", // σπάνια χρήση, σαν κουκκίδα προσοχής
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
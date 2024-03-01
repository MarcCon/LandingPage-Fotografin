/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Inria Serif", "serif"],
        modern: ["Fjalla One", "sans-serif"],
      },
      backgroundColor: {
        "custom-hover": "rgb(255,255,255)",
        "footer-input1": "rgb(71,66,59)",
        "background-blue": "rgb(250, 249,255)",
        gold: "rgb(171, 141, 63)",
      },

      boxShadow: {
        glow: "0 0 35px 2px rgba(255,165,0, 0.5)",
        glowlight: "0 0 35px 2px rgba(238,130,238, 0.15)", // Rosa Glow-Effekt
      },
    },
  },
  plugins: [],
};

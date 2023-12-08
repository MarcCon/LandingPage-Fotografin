/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Inria Serif", "serif"],
      },

      backgroundColor: {
        "custom-hover": "rgb(255,255,255)",
        "footer-input1": "rgb(71,66,59)",
        "background-blue":"rgb(250, 249,255)"
        


      },
    },
  },
  plugins: [],
};

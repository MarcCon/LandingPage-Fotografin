/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Inria Serif", "serif"],
      },
      backgroundColor: {
        "custom-hover": "rgb(207,181,59)",
      },
    },
  },
  plugins: [],
};

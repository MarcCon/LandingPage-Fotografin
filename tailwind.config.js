/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Inria Serif', 'serif'],
      },
      backgroundColor: {

        'custom-hover': 'rgb(222, 182, 75)'

      }
      
    },
  },
  plugins: [],
}

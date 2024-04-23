/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  // plugins: [], :is plugins ko hatake  disyui vala plugin lagayenge
    plugins: [require("daisyui")],

}
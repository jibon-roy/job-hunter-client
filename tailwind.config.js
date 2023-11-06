/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-blue': '#007efe',
      'primary-blue-hover': '#208efe',
      'primary-dark-blue': '#034077',
      'primary-dark': '#233349'
    }
  },
  plugins: [require('daisyui')],
}
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
      'primary-blue-secondery': '#add6ff',
      'primary-blue-hover': '#005ede',
      'primary-dark-blue': '#034077',
      'primary-dark': '#233349',
      'primary-white': '#ffffff',
      'red': '#ea2323',
      'red-hover': '#c92222',
      'green': '#32bb32'
    }
  },
  plugins: [require('daisyui')],
}
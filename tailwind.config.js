/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-indigo': '#b300ff',
      'primary-indigo-secondery': '#f3d6ff',
      'primary-indigo-hover': '#9e02e0',
      'primary-dark-indigo': '#9e02d0',
      'primary-dark': '#233349',
      'primary-white': '#ffffff',
      'red': '#ea2323',
      'red-hover': '#c92222',
      'green': '#32bb32'
    }
  },
  plugins: [require('daisyui')],
}
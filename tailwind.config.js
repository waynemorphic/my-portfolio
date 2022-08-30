/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.js","./index.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {},
  },
  plugins: [],
}

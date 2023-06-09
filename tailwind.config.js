/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage:{
          'bgExploration': "url('/src/Assets/Rectangle 27.png')",
          'bgBlog': "url('/src/Assets/Rectangle 37.png')"
        }
    },
    fontFamily:{
      sans: ["'Open Sans'",'sans-serif'],
    },
  },
  plugins: [],
}
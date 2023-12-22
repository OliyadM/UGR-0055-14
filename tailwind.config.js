/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/homepage.html",
    "./dist/about.html",
    "./dist/travel.html",
    "./dist/hobbies.html",
    "./dist/resume.html",
  ],
  theme: {
    extend: {
      colors:{
        secondary:'#444',
        home:'#f5f5dc'
      }
    },
  },
  plugins: [],
}


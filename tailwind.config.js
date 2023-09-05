/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        shadowForFirst: "0px 35px 50px -15px #C2C3D680"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     extend: {
      margin: {
        '60px': '60px',
        '80px': '80px',
      },
      top: {
        '17%': '17%',
        '20%' : '20%',
      },
      height: {
        '450px': '450px',
      },
     },
   },
   plugins: [],
 }
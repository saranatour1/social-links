/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:{
          'bright':' hsl(75, 94%, 57%)',
        },
        gray:{
          'w':"hsl(0, 0%, 20%)",
          "d":'hsl(0, 0%, 12%)',
        },
        black:{
          'o':' hsl(0, 0%, 8%)'
        }
        
      },
      fontFamily:{
        'Inter':[ 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


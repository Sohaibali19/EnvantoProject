/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'roboto' : ['Roboto', 'sans-serif']
      
                },
                screens: {
                  
                  'sm' : '350px',
                  'tm':  '500px',
                  'md' : '768px',
                  'lg' : "1024px",
                  "xl" : '1200px',
                  'xxl' : '1400px',
                },
   
    extend: {},
  },
  plugins: [],
}


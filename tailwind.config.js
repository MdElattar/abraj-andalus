/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C5A869', // اللون الذهبي المستوحى من الشعار
          dark: '#B09355',
        },
        dark: '#0F172A', // كحلي غامق جداً للنصوص والخلفيات الفخمة
        light: '#F8FAFC',
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
        english: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
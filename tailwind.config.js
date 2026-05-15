/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          dark: '#1a1a1a',
          accent: '#7c3aed',
          light: '#f3f4f6',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}

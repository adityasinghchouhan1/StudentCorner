/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Myorange: '#FFA500',
      },
      fontFamily: {
        Yellowtail: ['Yellowtail', 'cursive'],
        CormorantGaramond: ['Cormorant Garamond', 'serif'],
        Playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

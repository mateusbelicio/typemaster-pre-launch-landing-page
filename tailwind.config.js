/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1110px',
      },
    },
    extend: {
      screens: {
        lg: '1190px',
      },
      colors: {
        primary: {
          300: '#FF9B62',
          400: '#F16718',
        },
        secondary: {
          100: '#FFFFFF',
          200: '#E8EFF2',
          300: '#7B8BAD',
          400: '#162542',
        },
      },
      fontSize: {
        base: ['1rem', '1.625rem'],
        md: ['1.5rem', '1.75rem'],
        lg: ['2rem', '2.25rem'],
        xl: ['clamp(3rem, 1.8772rem + 2.3392vw, 3.5rem)', '1'],
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.25rem',
      },
    },
  },
  plugins: [],
};

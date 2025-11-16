/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm coffee-toned palette
        'latte': {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d4c2a8',
          400: '#b89d7a',
          500: '#9d7f5c',
          600: '#8a6d4f',
          700: '#725842',
          800: '#5f4a38',
          900: '#4f3e30',
        },
        'espresso': {
          50: '#f5f3f0',
          100: '#e8e0d6',
          200: '#d1c0ad',
          300: '#b59a7d',
          400: '#9d7a5a',
          500: '#8a6647',
          600: '#72523a',
          700: '#5c4230',
          800: '#4d3728',
          900: '#412f23',
        },
        'crema': {
          50: '#fefbf6',
          100: '#fdf6eb',
          200: '#faecd2',
          300: '#f6ddb0',
          400: '#f1c885',
          500: '#ecb05a',
          600: '#e09a3a',
          700: '#ba7a2c',
          800: '#986228',
          900: '#7b5124',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}


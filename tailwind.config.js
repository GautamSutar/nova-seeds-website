/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#1B5E20',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
          950: '#0a3d0a',
        },
        mustard: {
          DEFAULT: '#F9A825',
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFEB3B',
          600: '#FDD835',
          700: '#F9A825',
          800: '#F57F17',
          900: '#E65100',
        },
        brand: {
          green: '#1B5E20',
          mustard: '#F9A825',
          yellow: '#FFC107',
          darkgreen: '#0a3d0a',
          lightgreen: '#E8F5E9',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        noto: ['"Noto Sans Devanagari"', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        'base': ['16px', '1.6'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a3d0a 0%, #1B5E20 50%, #2E7D32 100%)',
        'mustard-gradient': 'linear-gradient(135deg, #F9A825 0%, #FFC107 100%)',
        'card-gradient': 'linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)',
      },
    },
  },
  plugins: [],
};

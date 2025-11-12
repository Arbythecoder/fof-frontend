/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FoF Brand Colors - Updated to match vibrant logo
        gold: {
          primary: '#F4A438', // Vibrant golden orange from logo
          light: '#F9C875',
          dark: '#E08F1C',
          shimmer: '#FFD166',
        },
        green: {
          primary: '#2F9E44', // Vibrant green from logo
          secondary: '#40C463',
          light: '#66D97F',
          dark: '#1F7A30',
          forest: '#1B5E20',
        },
        orange: {
          primary: '#FF8534', // Bright orange accent from logo
          light: '#FFB366',
          dark: '#E66F1F',
        },
        cream: {
          bg: '#FAF7F2',
          light: '#FDFCFA',
        },
        coral: {
          accent: '#FF6B6B',
        },
        teal: {
          accent: '#4ECDC4',
        },
        beige: {
          warm: '#F2EEE0',
        }
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Satisfy', 'cursive'],
      },
      borderRadius: {
        'fof': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 300ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        slideDown: 'slideDown 350ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        slideInRight: 'slideInRight 400ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        fadeOut: 'fadeOut 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      transitionDuration: {
        'brand': '300ms',
        'brand-slow': '450ms',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

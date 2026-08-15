/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        teal: '#8b5cf6',
        'teal-dark': '#7c3aed',
        'teal-deep': '#2e1065',
        'teal-darker': '#1e1b4b',
        'teal-light': '#f3e8ff',
        'teal-mint': '#faf5ff',
        sky: '#f3e8ff',
        'sky-light': '#faf5ff',
        ink: '#111827',
        muted: '#6b7280',
        paper: '#ffffff',
        border: '#e9d5ff',
        footer: {
          bg: '#1e1b4b',
          dark: '#2e1065',
          text: '#ddd6fe',
          accent: '#8b5cf6',
        },
        figma: {
          purple: '#8b5cf6',
          'purple-dark': '#7c3aed',
          'purple-deep': '#2e1065',
          'purple-light': '#f3e8ff',
          'purple-tint': '#faf5ff',
          teal: '#8b5cf6',
          'teal-dark': '#7c3aed',
          'teal-deep': '#2e1065',
          'teal-light': '#f3e8ff',
          'teal-mint': '#faf5ff',
        },
        brand: {
          teal: '#8b5cf6',
          'teal-dark': '#7c3aed',
          'teal-deep': '#2e1065',
          sky: '#f3e8ff',
          'sky-light': '#faf5ff',
          ink: '#111827',
          muted: '#6b7280',
          paper: '#ffffff',
          border: '#e9d5ff',
          accent: '#8b5cf6',
        }
      },
      boxShadow: {
        'card': '0 10px 30px rgba(22, 53, 58, 0.05)',
        'card-hover': '0 18px 45px rgba(22, 53, 58, 0.10)',
      },
      borderRadius: {
        'brand': '16px',
      },
      fontFamily: {
        sans: ['"Public Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

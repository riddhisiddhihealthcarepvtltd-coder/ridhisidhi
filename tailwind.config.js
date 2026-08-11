/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#1f8a86',
        'teal-dark': '#12635f',
        'teal-deep': '#123f43',
        'teal-darker': '#0d3033',
        'teal-light': '#dceff4',
        'teal-mint': '#eef8f8',
        sky: '#dceff4',
        'sky-light': '#f7fbfb',
        ink: '#16353a',
        muted: '#647b80',
        paper: '#f7fbfb',
        border: '#dce8e9',
        footer: {
          bg: '#0d3033',
          dark: '#123f43',
          text: '#b8cfd1',
          accent: '#1f8a86',
        },
        figma: {
          purple: '#1f8a86',
          'purple-dark': '#12635f',
          'purple-deep': '#123f43',
          'purple-light': '#dceff4',
          'purple-tint': '#f7fbfb',
          teal: '#1f8a86',
          'teal-dark': '#12635f',
          'teal-deep': '#123f43',
          'teal-light': '#dceff4',
          'teal-mint': '#eef8f8',
        },
        brand: {
          teal: '#1f8a86',
          'teal-dark': '#12635f',
          'teal-deep': '#123f43',
          sky: '#dceff4',
          'sky-light': '#f7fbfb',
          ink: '#16353a',
          muted: '#647b80',
          paper: '#f7fbfb',
          border: '#dce8e9',
          accent: '#1f8a86',
        }
      },
      boxShadow: {
        'card': '0 10px 30px rgba(22, 53, 58, 0.05)',
        'card-hover': '0 18px 45px rgba(22, 53, 58, 0.10)',
      },
      borderRadius: {
        'brand': '16px',
      }
    },
  },
  plugins: [],
}

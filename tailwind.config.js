/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0B0C0E',
        surface: '#131418',
        'surface-2': '#191A1F',
        'cream-warm': '#E8D5C4',
        'cream-soft': '#F1ECE5',
        accent: '#C5A880',
        'text-main': '#F2EEE8',
        'text-muted': '#A6A4A0',
        'border-subtle': 'rgba(232, 213, 196, 0.12)',
        'border-accent': 'rgba(197, 168, 128, 0.25)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.15em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'preview': '0 20px 50px -10px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}

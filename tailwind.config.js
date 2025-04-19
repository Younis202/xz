/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        secondary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          'mint': '#86efac',
          'peach': '#fdba74',
          'neon-pink': '#f472b6',
          'neon-blue': '#38bdf8',
          'lime': '#a3e635',
          'coral': '#fb7185',
          'turquoise': '#2dd4bf',
          'yellow': '#facc15',
          'orange': '#fb923c',
          'sky': '#0ea5e9',
          'emerald': '#10b981',
          'amber': '#f59e0b',
        },
        teen: {
          'green': '#4ade80',
          'blue': '#60a5fa',
          'pink': '#f9a8d4',
          'orange': '#fb923c',
          'red': '#f87171',
          'teal': '#2dd4bf',
          'amber': '#fbbf24',
          'sky': '#38bdf8',
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        teen: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        'blob': '69% 31% 61% 39% / 43% 38% 62% 57%',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.accent.neon-blue), 0 0 20px theme(colors.accent.neon-blue)',
        'neon-pink': '0 0 5px theme(colors.accent.neon-pink), 0 0 20px theme(colors.accent.neon-pink)',
        'neon-strong': '0 0 10px theme(colors.accent.neon-blue), 0 0 30px theme(colors.accent.neon-blue), 0 0 50px theme(colors.accent.neon-blue)',
        'teen': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'teen-hover': '0 20px 35px -10px rgba(0, 0, 0, 0.1), 0 10px 20px -10px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px theme(colors.accent.neon-blue)' },
          '100%': { boxShadow: '0 0 20px theme(colors.accent.neon-blue), 0 0 30px theme(colors.accent.neon-pink)' },
        },
        blob: {
          '0%': { borderRadius: '69% 31% 61% 39% / 43% 38% 62% 57%' },
          '25%': { borderRadius: '37% 63% 51% 49% / 37% 65% 35% 63%' },
          '50%': { borderRadius: '52% 48% 39% 61% / 65% 40% 60% 35%' },
          '75%': { borderRadius: '60% 40% 71% 29% / 63% 65% 35% 37%' },
          '100%': { borderRadius: '69% 31% 61% 39% / 43% 38% 62% 57%' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'teen-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M36 34c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm0-18c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm18 0c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm-18 18c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm18 0c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm18 0c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        },
        '.text-shadow-lg': {
          textShadow: '0 15px 30px rgba(0, 0, 0, 0.11), 0 5px 15px rgba(0, 0, 0, 0.08)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.text-glow-blue': {
          textShadow: '0 0 5px #38bdf8, 0 0 10px #38bdf8',
        },
        '.text-glow-pink': {
          textShadow: '0 0 5px #f472b6, 0 0 10px #f472b6',
        },
        '.text-glow-green': {
          textShadow: '0 0 5px #10b981, 0 0 10px #10b981',
        },
        '.text-glow-orange': {
          textShadow: '0 0 5px #fb923c, 0 0 10px #fb923c',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

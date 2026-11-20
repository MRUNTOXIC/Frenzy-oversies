import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101C35',
          dark: '#0A1427',
          light: '#1B2C4F',
          muted: '#182743',
        },
        midnight: '#0A1427',
        royal: {
          DEFAULT: '#244B85',
          dark: '#1B3864',
          light: '#3662A6',
        },
        gold: {
          DEFAULT: '#C9A76A',
          light: '#D8BC86',
          dark: '#B08E50',
          subtle: 'rgba(201, 167, 106, 0.15)',
        },
        cream: '#F8F7F3',
        softgrey: '#E9EBEF',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        editorial: '.08em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(10, 20, 39, 0.08), 0 0 1px 1px rgba(201, 167, 106, 0.12)',
        'luxury-hover': '0 30px 60px -15px rgba(10, 20, 39, 0.15), 0 0 1px 1px rgba(201, 167, 106, 0.25)',
        'gold-glow': '0 0 25px rgba(201, 167, 106, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

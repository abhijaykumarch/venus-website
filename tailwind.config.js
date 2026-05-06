/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Brand palette
        brand: {
          purple: '#4A154B',
          darkpurple: '#2E0D2E',
          gold: '#D4AF37',
          softgray: '#F5F3F4',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#4A154B',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#D4AF37',
          foreground: '#2E0D2E',
        },
        muted: {
          DEFAULT: '#F5F3F4',
          foreground: '#6B6B6B',
        },
        accent: {
          DEFAULT: '#D4AF37',
          foreground: '#2E0D2E',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#2E0D2E',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#2E0D2E',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      boxShadow: {
        'glow-gold': '0 0 24px rgba(212, 175, 55, 0.45), 0 0 48px rgba(212, 175, 55, 0.25)',
        'glow-purple': '0 0 24px rgba(74, 21, 75, 0.55), 0 0 60px rgba(74, 21, 75, 0.35)',
        'glow-duo': '0 0 24px rgba(212, 175, 55, 0.45), 0 0 48px rgba(74, 21, 75, 0.45)',
        'luxury': '0 20px 50px -20px rgba(46, 13, 46, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

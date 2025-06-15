
// Professional, accessible palette: deep blue, cool gray, and orange accent

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        // Modern, readable palette
        brand: {
          bg: "#f3f6fa",
          primary: "#1a237e",
          secondary: "#f3f6fa",
          accent: "#ff9800",
          dark: "#131a36",
          cta: "#fb8500",
        },
        border: '#e0e7ef',
        input: '#d1e3f8',
        ring: '#1a237e',
        background: '#f3f6fa',
        foreground: '#1a237e',
        primary: {
          DEFAULT: "#1a237e",  // deep blue
          foreground: "#fff"
        },
        secondary: {
          DEFAULT: "#f3f6fa",
          foreground: "#131a36"
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#fff'
        },
        muted: {
          DEFAULT: "#e4e8ef",
          foreground: "#5871b5"
        },
        accent: {
          DEFAULT: "#ff9800",
          foreground: "#fff"
        },
        popover: {
          DEFAULT: "#f3f6fa",
          foreground: "#131a36"
        },
        card: {
          DEFAULT: "#fff",
          foreground: "#1a237e"
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'promo-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'promo-bounce': 'promo-bounce 1.2s ease infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


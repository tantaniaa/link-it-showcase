
import type { Config } from "tailwindcss";

// Cute pastel palette: pink, lavender, mint, lemon, sky blue

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
        // Cute, pastel palette
        brand: {
          bg: "#FFF6F9",               // soft pink background
          primary: "#EA80FC",           // lavender
          secondary: "#B388FF",         // pastel purple
          accent: "#FFB6B6",            // pastel pink accent
          dark: "#9370DB",              // deep lilac
          cta: "#50E3C2",               // mint
        },
        border: '#FFD6EC',              // pastel pink border
        input: '#D5F3FF',               // blue/sky accent for inputs
        ring: '#EA80FC',                // lavender ring
        background: '#FFF6F9',
        foreground: '#6D597A',          // muted purple text
        primary: {
          DEFAULT: "#EA80FC",           // lavender
          foreground: "#fff"
        },
        secondary: {
          DEFAULT: "#B388FF",           // pastel purple
          foreground: "#fff"
        },
        destructive: {
          DEFAULT: '#F98C94',
          foreground: '#fff'
        },
        muted: {
          DEFAULT: "#FFE5EC",           // light pink muted
          foreground: "#B388FF"
        },
        accent: {
          DEFAULT: "#FFB6B6",           // pastel pink
          foreground: "#fff"
        },
        popover: {
          DEFAULT: "#FFF6F9",
          foreground: "#6D597A"
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#6D597A"
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

import type { Config } from "tailwindcss";

// Modern Apple inspired palette: soft light grey, white, darker accents, blue highlights

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
        // Apple uses SF Pro, fallback to system UI stack for web
        apple: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        // Apple-inspired neutral palette
        brand: {
          bg: "#f9fafb",             // very light grey background
          primary: "#1a1a1a",        // super deep dark
          secondary: "#f0f0f5",      // light neutral box
          accent: "#0071e3",         // blue accent (Apple blue)
          dark: "#252525",           // dark grey, not pure black
          cta: "#0071e3",            // same blue for cta
        },
        border: "#ececec",            // subtle border grey
        input: "#f0f0f5",             // matches card/box background
        ring: "#0071e3",              // blue ring
        background: "#f9fafb",
        foreground: "#23272a",        // deep muted text
        primary: {
          DEFAULT: "#1a1a1a",         // main text/black
          foreground: "#fff"
        },
        secondary: {
          DEFAULT: "#f0f0f5",         // surface/card background
          foreground: "#23272a"
        },
        destructive: {
          DEFAULT: "#fa3c3c",
          foreground: "#fff"
        },
        muted: {
          DEFAULT: "#f3f3f7",         // light grey muted
          foreground: "#8a8a8f"
        },
        accent: {
          DEFAULT: "#0071e3",         // blue accent
          foreground: "#fff"
        },
        popover: {
          DEFAULT: "#fff",
          foreground: "#23272a"
        },
        card: {
          DEFAULT: "#fff",
          foreground: "#23272a"
        }
      },
      borderRadius: {
        lg: "18px",
        md: "14px",
        sm: "8px",
      },
      boxShadow: {
        apple: "0 4px 16px 0 rgba(30,34,40,0.04), 0 1.5px 6px 0 rgba(30,34,40,0.04)",
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

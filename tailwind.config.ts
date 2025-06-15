
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
        apple: ['Nunito', 'sans-serif'], // override apple to Nunito for now
      },
      colors: {
        brand: {
          bg: "#f8fcff",         // Light blue
          primary: "#1ed760",    // Playful green (like Wati's accent)
          secondary: "#ffe8f0",  // Pink background
          accent: "#5468ff",     // Vibrant blue
          dark: "#2d2d3a",       // Wati dark blue-grey
          cta: "#ff5f7f",        // Lively pink (CTA)
        },
        border: "#e3e9f2",       // way lighter blue border
        input: "#f2f8fe",        // lighter than bg
        ring: "#95f7c1",         // Soft mint ring
        background: "#f8fcff",
        foreground: "#393a56",   // Deep blue text
        primary: {
          DEFAULT: "#393a56",
          foreground: "#fff"
        },
        secondary: {
          DEFAULT: "#ffe8f0",
          foreground: "#393a56"
        },
        destructive: {
          DEFAULT: "#fa3c3c",
          foreground: "#fff"
        },
        muted: {
          DEFAULT: "#f6f6fb",
          foreground: "#8a8a8f"
        },
        accent: {
          DEFAULT: "#5468ff",
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
        lg: "2rem",
        md: "1.25rem",
        sm: "0.5rem",
      },
      boxShadow: {
        fun: "0 4px 32px 0 rgba(30, 60, 90, 0.12)",
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


/** @type {import('tailwindcss').Config} */
module.exports = {
    // `overline` is a Tailwind utility; without this an app's own eyebrow-label class draws a line above the text.
    blocklist: ["overline"],
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      borderRadius: {
        lg: '0',
        md: '0',
        sm: '0'
      },
      colors: {
        background: '#000000',
        foreground: '#FFFFFF',
        card: {
          DEFAULT: '#0A0A0A',
          foreground: '#FFFFFF'
        },
        popover: {
          DEFAULT: '#0A0A0A',
          foreground: '#FFFFFF'
        },
        primary: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000'
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#1A1A1A',
          foreground: 'rgba(255,255,255,0.6)'
        },
        accent: {
          DEFAULT: '#1A1A1A',
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: '#B91C1C',
          foreground: '#FFFFFF'
        },
        border: 'rgba(255,255,255,0.15)',
        input: 'rgba(255,255,255,0.2)',
        ring: '#FFFFFF',
        thread: '#C8A96A'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

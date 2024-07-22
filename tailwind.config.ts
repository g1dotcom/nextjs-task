import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'Primary': {
          100: '#DCE4FF',
          200: '#BAC8FF',
          300: '#98ABFF',
          400: '#9F84FD',
          500: '#546FFF',
          600: '#3D53DB',
          700: '#2A3BB7',
          800: '#1A2793',
          900: '#10197A',
        },
        'Success': {
          100: '#F5FCD2',
          200: '#E8FAA6',
          300: '#D3F178',
          400: '#BCE455',
          500: '#9CD323',
          600: '#7FB519',
          700: '#659711',
          800: '#4C7A0B',
          900: '#3B6506',
        },
        'Error': {
          100: '#FFE7D3',
          200: '#FFC8A6',
          300: '#FFA37A',
          400: '#FF7F59',
          500: '#FF4423',
          600: '#DB2719',
          700: '#B71112',
          800: '#930B16',
          900: '#7A0619',
        },
        'Warning': {
          100: '#FFF8D7',
          200: '#FFEFB0',
          300: '#FFE488',
          400: '#FFD96B',
          500: '#FFC73A',
          600: '#DBA32A',
          700: '#B7821D',
          800: '#936312',
          900: '#7A4D0B',
        },
        'Information': {
          100: '#DCF3FF',
          200: '#BAE5FF',
          300: '#98D3FF',
          400: '#7EC2FF',
          500: '#54A6FF',
          600: '#3D81DB',
          700: '#2A60B7',
          800: '#1A4393',
          900: '#102E7A',
        },
        'Secondinary': {
          100: '#DFE1F3',
          200: '#C2C6E8',
          300: '#8E92BC',
          400: '#54577A',
          500: '#141522',
          600: '#0E0F1D',
          700: '#0A0A18',
          800: '#060713',
          900: '#040815',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
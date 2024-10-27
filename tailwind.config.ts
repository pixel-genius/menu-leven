import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'backgrund': "url('/backgrund.svg')",
      },
      fontFamily: {
        'peyda': ['peyda', 'peyda'],
      },
      colors: {
        primary: {
          50: '#ecfdf6',
          100: '#d0fbe8',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3', // رنگ اصلی پرایمری
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
          950: '#08337a', // سایه‌ی تیره‌تر
        },
        
        error: {
          50: '#fbeaea',
          100: '#f8d4d4',
          200: '#f19999',
          300: '#ea6f6f',
          400: '#e04747',
          500: '#d63030', // رنگ اصلی خطا
          600: '#bc2828',
          700: '#a31f1f',
          800: '#891717',
          900: '#701010',
          950: '#570808', // سایه‌ی تیره‌تر
        },
        success: {
          50: '#ebf7ec',
          100: '#c6ecc8',
          200: '#9de1a2',
          300: '#73d47c',
          400: '#4cc959',
          500: '#38c172', // رنگ اصلی موفقیت
          600: '#2e9d5b',
          700: '#247944',
          800: '#1a5530',
          900: '#123321',
          950: '#0c2115', // سایه‌ی تیره‌تر
        },
        warning: {
          50: '#fff7e5',
          100: '#ffeac2',
          200: '#ffd59a',
          300: '#ffc171',
          400: '#ffad4b',
          500: '#ff9a26', // رنگ اصلی هشدار
          600: '#e68b20',
          700: '#cc7b1a',
          800: '#b36b14',
          900: '#995c10',
          950: '#7f4d0c', // سایه‌ی تیره‌تر
        },
        background: {
          1: '#f8fafc', // بک‌گراند 1
          2: '#e5e7eb', // بک‌گراند 2
        },
        foreground: "#000", // رنگ اصلی برای متن یا عناصر
      },
    },
  },
  plugins: [],
};

export default config;

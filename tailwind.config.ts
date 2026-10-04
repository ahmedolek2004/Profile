import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: '#020617',
        surface: '#0b1325',
        line: '#1e293b',
        accent: '#38bdf8',
      },
    },
  },
  plugins: [],
} satisfies Config;

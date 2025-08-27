import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0c10',
        card: '#111318',
        text: '#e8eaed',
        muted: '#a0a4ab',
        brand: '#4f46e5'
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.25)'
      }
    }
  },
  plugins: []
} satisfies Config

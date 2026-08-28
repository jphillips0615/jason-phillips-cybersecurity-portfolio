import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        cyber: {
          bg: '#050505',
          bg2: '#0B0B0B',
          card: '#111111',
          elevated: '#161616',
          red: '#E10600',
          bright: '#FF2020',
          darkred: '#750000',
          text: '#F5F5F5',
          secondary: '#A0A0A0',
          muted: '#666666',
          border: '#242424',
        },
      },
      boxShadow: {
        'red-soft': '0 0 35px rgba(225, 6, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config

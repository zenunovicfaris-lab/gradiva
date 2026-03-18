import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gradiva-green':       '#6B7229',
        'gradiva-green-dark':  '#4A5019',
        'gradiva-green-light': '#8B9340',
        'stone-warm':          '#F5F3EE',
        'charcoal':            '#1C1C1A',
        'slate-mid':           '#6B6B6B',
        'warm-white':          '#FAFAF8',
        'gold-accent':         '#C9A96E',
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 7vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero':    ['clamp(2.25rem, 5vw, 4rem)',  { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'title':   ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': '5rem',
        'section-lg': '7rem',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #1C1C1A 0%, #2a2e14 40%, #1a1d0a 100%)',
        'dark-green-gradient':
          'linear-gradient(160deg, #2a2e14 0%, #1C1C1A 100%)',
        'stone-gradient':
          'linear-gradient(180deg, #FAFAF8 0%, #F5F3EE 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}

export default config

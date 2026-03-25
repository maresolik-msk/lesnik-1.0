export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        birch: '#F9F7F3',
        stone: '#E7E2D8',
        moss: '#4A5F4F',
        forest: '#0D0D0D',
        reed: '#A6A6A6',
        sage: '#C4D6C6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      transitionTimingFunction: {
        'quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

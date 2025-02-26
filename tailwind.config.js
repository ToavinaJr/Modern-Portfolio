// tailwind.config.js
import patterns from 'tailwindcss-patterns';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Vos extensions de thème...
    },
  },
  plugins: [
    patterns
  ],
}
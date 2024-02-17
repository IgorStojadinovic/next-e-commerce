import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        home: "url('/public/home/mian.png')",
      },
      height: {
        dvh: '100dvh',
        svh: '100svh',
        lvh: '100lvh',
      },
      width: {
        dvw: '100dvw',
      },
      colors: {
        'btn-orange': '#D87D4A',
        'light-gray': '#979797',
        orange: '#D87D4A',
        black: '#101010',
      },
    },
  },
  plugins: [],
};
export default config;

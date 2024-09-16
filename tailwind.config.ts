import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 300s linear infinite',
      },
      colors: {
        'mn-blue': '#003865',
        'mn-green': '#78BE21',
        'mn-accent-teal': '#008EAA',
        'mn-accent-green': '#0D5257',
        'mn-accent-orange': '#8D3F2B',
        'mn-accent-purple': '#5D295F',
        'mn-accent-gold': '#FFC845',
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '0.9rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

  },
  plugins: [],
};
export default config;

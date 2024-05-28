import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '1': '0 .125rem 1rem rgba(0, 0, 0, .08)',
        '2': '0 2px 16px rgba(0,0,0,.32)',
      },
    },
  },
  plugins: [],
};
export default config;


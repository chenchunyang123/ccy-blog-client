import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#425aef',
        border: '#e3e8f7',
        ['font-main']: '#4c4948',
        ['font-light']: '#3e5658',
      },
    },
  },
  plugins: [],
};
export default config;

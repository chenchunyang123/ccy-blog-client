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
        // 卡片的box-shadow样式
        ['card-shadow']: '0 8px 16px -4px rgba(44,45,48,0.047)',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'below-lg': { 'max': '1024px' },
        'below-xg': { 'max': '573px' }, 
      },
      fontSize: {
      '40': '40px', 
      '16': '16px', 
      '36': '30px', 
    },
      spacing: {
        '25': '100px', 
        '26': '62px',
        '27': '40px',
        '28': '140px', 
      },
      colors: {
        headbackg: '#15141C',
        customBlue: '#1A78A8',
        customDarkBlue: '#0C364B',
        yellowGreen: '#CDFF0C',
        'D5FE04': '#D5FE04',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right top, #1A78A8, #0C364B)',
        'custom-image': "url('/img/presentation.svg')",
      },
      boxShadow: {
        'custom-white': '0px 4px 25px 0px #FFFFFF40',
      },
      maxWidth: {
        'gants': '45%',
        'teste': '55%',
        'veste': '52%',
        'pantalon': '48%',
        'Chaussure' : '58%',
        'Protection' : '42%',
      },
      margin: {
        '15px': '15px',
      },
      height: {
        '350px': '350px',
      },
    },
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.ts',
      './src/**/*.jsx',
      './src/**/*.tsx',
      './src/**/*.mdx',
    ],
  },
};
export default config;

import { execSync } from 'child_process';
import fs from 'fs';

const appName = 'my-vite-app'; // Replace with your desired app name

// Create a new React app using Vite
execSync(`npm init vite@latest ${appName} -- --template react`, {
  stdio: 'inherit',
});

// Navigate to the app directory
process.chdir(appName);

// Install dependencies
execSync('npm install', { stdio: 'inherit' });

console.log('Vite app setup completed.');

// Install dev dependencies
execSync('npm install -D tailwindcss postcss autoprefixer', {
  stdio: 'inherit',
});

// Install react-icons package
execSync('npm install react-icons --save', { stdio: 'inherit' });

// Initialize Tailwind CSS configuration
execSync('npx tailwindcss init -p', { stdio: 'inherit' });

// Replace tailwind.config.js file content
const tailwindConfigCode = `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      primary: 'Almarai, sans-serif',
      secondary: 'Source Code Pro, monospace',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
        xs: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        body: '#010208',
        white: '#fff',
        pink: 'pink',
        transparent: 'transparent',
      },
      colors: {
        buttonColor: '#FF8413',
        primary: '#00B860',
        secondary: '#FF8413',
        dimWhite: '#00000080',
        navBg: '#B0FFDBB2',
        sectionBg: '#f2f2f2',
      },
    },
  },
  plugins: [],
};

`;

fs.writeFileSync('tailwind.config.js', tailwindConfigCode);

// Replace index.css file content
const indexCssCode = `@import '@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-secondary p-0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-primary;
  }
  a {
    @apply text-[15px] font-medium;
  }
  p {
    @apply text-[15px] font-medium text-dimWhite;
  }
}`;

fs.writeFileSync('index.css', indexCssCode);

console.log('Tailwind CSS setup completed.');

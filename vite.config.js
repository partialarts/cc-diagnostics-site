// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; // Import Tailwind CSS plugin
import autoprefixer from 'autoprefixer'; // Import autoprefixer plugin

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()], // Use the imported plugins here
    },
  },
  resolve: {
    alias: {
      // Ensure the correct handling of ES modules
      'react-helmet-async': 'react-helmet-async/lib/index.esm.js',
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactPages from 'vite-plugin-react-pages'; // Import the plugin

export default defineConfig({
  plugins: [
    react(),
    reactPages({
      // Include 'react-quill/dist/quill.snow.css' as a CSS dependency
      include: [/react-quill\/dist\/quill.snow.css/],
    }),
  ],
});

import { copyFileSync, existsSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'github-pages-spa-fallback',
      closeBundle() {
        const indexPath = 'dist/index.html';
        const fallbackPath = 'dist/404.html';

        if (existsSync(indexPath)) {
          copyFileSync(indexPath, fallbackPath);
        }
      },
    },
  ],
})

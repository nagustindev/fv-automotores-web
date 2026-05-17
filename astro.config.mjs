// @ts-check
import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindv4()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});

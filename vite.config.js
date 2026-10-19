import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' — чтобы сайт работал и локально, и на GitHub Pages / любом хостинге
export default defineConfig({
  plugins: [react()],
  base: './',
});

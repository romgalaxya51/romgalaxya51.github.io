// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // karena kamu akan deploy ke romgalaxya51.github.io (root domain)
});

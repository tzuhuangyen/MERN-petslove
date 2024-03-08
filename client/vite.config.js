import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MERN-petslove/',
  plugins: [react()],

  build: {
    outDir: 'dist',
    emptyOutDir: false, // 设置为 false，防止构建时清空输出目录

    rollupOptions: {
      input: 'src/main.jsx',
      output: {
        entryFileNames: `assets/main.js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },

  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
});
// ViteReactPlugin()

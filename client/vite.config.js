import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MERN-petslove/',
  root: './client', // 设置根目录为 client 文件夹
  plugins: [react()],

  build: {
    outDir: 'dist',
    emptyOutDir: false, // 设置为 false，防止构建时清空输出目录
    assetsDir: 'assets', // 将资源文件输出到名为 assets 的子目录中

    rollupOptions: {
      input: './src/main.jsx',
      output: {
        entryFileNames: `src/main.jxs`,
        chunkFileNames: `src/all.js`,
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

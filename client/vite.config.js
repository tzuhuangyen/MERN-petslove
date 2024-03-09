import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // 引入 resolve 方法

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/MERN-petslove/' : '/',
  root: '.', // 使用绝对路径设置根目录
  plugins: [react()],

  build: {
    outDir: 'dist',
    emptyOutDir: false, // 设置为 false，防止构建时清空输出目录
    assetsDir: 'assets', // 将资源文件输出到名为 assets 的子目录中

    rollupOptions: {
      input: 'main.jsx', // 修改为相对项目根目录的路径
      output: {
        entryFileNames: ({ name }) => `assets/${name}.js`,
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

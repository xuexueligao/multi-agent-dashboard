import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  server: {
    host: true,  // 允许外部访问
    port: 5173,  // 默认端口
  }
});
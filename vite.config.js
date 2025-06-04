import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',    // или true, если нужен внешний доступ
    port: 5173,
    hmr: {
      host: 'localhost',
      port: 5173,
    }
  }
});
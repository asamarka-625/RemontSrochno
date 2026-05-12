import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // разрешает подключения извне (необходимо для Docker)
    port: 5173,
    allowedHosts: [
      'test.botifybiz.ru'
    ],
    hmr: {
      path: '/remont-srochno/vite-hmr', // Отдельный путь для WebSocket
    },
    watch: {
       usePolling: false, // true важно для Hot Reload на Windows/WSL
    },
  },
})

import { defineConfig } from 'vite'

export default defineConfig({
  base: '/remont-srochno/', 

  server: {
    host: true, // разрешает подключения извне (необходимо для Docker)
    port: 5173,
    allowedHosts: [
      'test.botifybiz.ru'
    ],
    hmr: {
      protocol: 'wss', 
      host: 'test.botifybiz.ru',
      path: '@vite/client'
    },
    watch: {
       usePolling: false, // true важно для Hot Reload на Windows/WSL
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: { enabled: true, },
      strategies: 'generateSW',
      manifest: {
        name: 'Apptama',
        short_name: 'Apptama',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/assets/pwa/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/pwa/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,woff2,png,svg,jpg,jpeg,webp}'],
      },
    }),
  ],
})

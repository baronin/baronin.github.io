import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  publicPath: process.env.NODE_ENV === 'production' ? 'baronin.github.io' : '/',
  plugins: [
    vue(),
    VueI18nPlugin({ include: resolve(dirname(fileURLToPath(import.meta.url)), './locales'), }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}']
      },
      manifest: {
        name: 'Portfolio\'s Yaroslav Baronin ',
        short_name: 'front-end',
        description: 'Brief description about Yaroslav Baronin',
        theme_color: '#452a8f2',
        background_color: "#52a8f2",
        display: "standalone",
        icons: [
          {
            src: 'img/icons/icon-192x192.png', sizes: '192×192', type: "image/png"
          },
          {
            src: "img/icons/icon-256X256.png", sizes: "256x256", type:
              "image/png"
          },
          {
            src: "img/icons/icon-384×384.png",
            sizes:
              "384×384",
            type: "image/png"
          },
          { src: 'img/icons/icon-512x512.png', sizes: '512x512', type: "image/png" }
        ]
      }
    })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/main.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

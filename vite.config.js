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
        name: 'Yaroslav Baronin — Frontend Developer',
        short_name: 'YB Portfolio',
        description: 'Frontend Developer with 6+ years of experience. Vue 3, TypeScript, scalable UI.',
        theme_color: '#111111',
        background_color: '#111111',
        display: 'standalone',
        icons: [
          { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/common/vars"; @import "@/assets/scss/common/functions"; @import "@/assets/scss/common/mixins";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

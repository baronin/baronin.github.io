import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  dir: {
    assets: './src/assets',
    layouts: './src/layouts',
    pages: './src/pages',
    public: './src/public',
  },
  imports: {
    autoImport: false
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/assets/scss/main.scss" as *;'
        }
      }
    }
  }
})

import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },
  css: [
    // SCSS file in the project
    "~/style.scss",
  ],
});

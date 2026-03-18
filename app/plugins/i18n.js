import { defineNuxtPlugin } from '#app';
import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import ua from '../locales/ua.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "ua",
    fallbackLocale: "ua",
    availableLocales: ["en", "ua"],
    messages: { en, ua },
  });

  vueApp.use(i18n);
});

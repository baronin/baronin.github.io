import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import ua from '../locales/ua.json';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "ua"],
  messages: { en, ua },
});

export default i18n;
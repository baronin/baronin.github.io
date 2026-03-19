import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import ua from '../locales/ua.json';
import ru from '../locales/ru.json';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'ua',
  fallbackLocale: 'en',
  availableLocales: ['en', 'ua', 'ru'],
  messages: { en, ua, ru },
});

export default i18n;

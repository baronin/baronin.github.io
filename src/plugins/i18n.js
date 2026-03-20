import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import ua from '../locales/ua.json';
import ru from '../locales/ru.json';

const availableLocales = ['en', 'ua', 'ru'];
const savedLocale = localStorage.getItem('locale');
const locale = availableLocales.includes(savedLocale) ? savedLocale : 'en';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  fallbackLocale: 'en',
  availableLocales,
  messages: { en, ua, ru },
});

export default i18n;

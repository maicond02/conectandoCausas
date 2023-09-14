import { createI18n } from 'vue-i18n'

import en from '../locales/en.json'
import pt from '../locales/pt.json'
import es from '../locales/es.json'
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      pt,
      es
    }
  })

  vueApp.use(i18n)
})

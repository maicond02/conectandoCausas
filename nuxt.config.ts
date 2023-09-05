import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    ssr: false,
    nitro: {
      prerender: {
        crawlLinks: true
      }
    },
    
    components: true,
    app: {
      buildAssetsDir: '/src/'
    },
    css: [
        'primevue/resources/themes/md-dark-indigo/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
    ],
    modules: [
        [
          '@pinia/nuxt',
          {
            autoImports: [
              'defineStore',
              ['defineStore', 'definePiniaStore'],
            ],
          },
        ],
      ],

      typescript: {
        strict: true,
      },
      
})
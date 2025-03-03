// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['~/assets/styles/global.scss', 'vuetify/lib/styles/main.sass', "@/assets/fonts/fonts.css"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_ENDPOINT ?? 'http://127.0.0.1:8000/api'
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    'vue-yandex-maps/nuxt',
    '@pinia/nuxt',
    'nuxt-swiper',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({
          autoImport: true,
          styles: {
            configFile: 'assets/styles/vuetify.scss',
          },
        }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  yandexMaps: {
    apikey: '61a0064e-8ce3-4b3e-a7d1-cf970fadd310',
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  imports: {
    dirs: [
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'composables/**'
    ]
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true
})

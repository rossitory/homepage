export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['nuxt-svgo', 'nuxt-lucide-icons', '@nuxt/image'],

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
  },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  svgo: {
    autoImportPath: '~/assets/svgo/',
  },

  lucide: {
    namePrefix: ''
  },


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
});
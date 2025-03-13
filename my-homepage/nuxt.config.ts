export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

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
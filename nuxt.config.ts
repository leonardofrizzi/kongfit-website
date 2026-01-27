// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-27',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt'
  ],

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts'
  },

  app: {
    head: {
      title: 'Kong Fit Rio - Centro de Treinamento',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Kong Fit Rio - Academia, CrossFit e Centro de Treinamento no Rio de Janeiro' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/fav.svg' }
      ]
    }
  }
})

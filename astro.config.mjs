// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import vercel from '@astrojs/vercel'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://nelsonrojas.dev',
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        es: 'es-ES',
      },
    },
    filter: (page) =>
      page !== 'https://nelsonrojas.dev/hidden/admin/' &&
      page !== 'https://nelsonrojas.dev/hidden/playground/' &&
      page !== 'https://nelsonrojas.dev/hidden/profile/'
  })],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
})
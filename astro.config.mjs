// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
})
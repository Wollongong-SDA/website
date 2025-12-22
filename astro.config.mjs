// @ts-check
import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'
import UnoCSS from 'unocss/astro'
import playformCompress from '@playform/compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://illawarraadventist.org',
  output: 'static',
  integrations: [
    vue(),
    UnoCSS({
      injectReset: true,
    }),
    playformCompress({
      Image: false,
    }),
  ],
  image: {
    domains: ['10.2.100.6:8055', 'cms.illawarraadventist.org'],
  },
  prefetch: true,
})

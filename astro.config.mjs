// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import node from '@astrojs/node';
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    UnoCSS({
      injectReset: true
    })
  ],
  adapter: node({
    mode: 'standalone'
  }),
  image: {
    domains: ['10.2.100.6:8055', 'cms.illawarraadventist.org']
  }
});

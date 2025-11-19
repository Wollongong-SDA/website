// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    vue(),
    UnoCSS({
      injectReset: true
    })
  ],
  image: {
    domains: ['10.2.100.6:8055', 'cms.illawarraadventist.org']
  }
});

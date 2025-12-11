import { defineConfig, presetWind4, presetIcons } from 'unocss'

const shortcuts = {
  // Styles
  'heading-1': 'text-6xl font-bold text-fire',
  'heading-2': 'text-5xl font-bold text-fire',
  'heading-3': 'text-4xl font-semibold text-fire',
  'heading-4': 'text-3xl font-semibold text-charcoal',
  'heading-5': 'text-2xl font-medium text-charcoal',
  'link': 'underline text-fire hover:text-charcoal transition-colors cursor-pointer',
  // Icons
  'icons-facebook': 'i-mdi-facebook',
  'icons-instagram': 'i-mdi-instagram',
  'icons-youtube': 'i-mdi-youtube',
  'icons-hand-heart': 'i-mdi-hand-heart',
}

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
    }),
    presetWind4()
  ],
  theme: {
    font: {
      'sans': '"Noto Sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    colors: {
      'glow': '#faf9f7',
      'glow-darker': '#f0efed',
      'fire': '#ff8200',
      'charcoal': '#3d3935',
      'charcoal-faded': '#6e6b68',
      'charcoal-active': '',
    }
  },
  shortcuts,
  safelist: Object.keys(shortcuts),
})

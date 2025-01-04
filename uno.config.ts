import presetIcons from '@unocss/preset-icons'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
    }),
    presetUno(),
  ],
  theme: {
    fontFamily: {
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
  shortcuts: {
    'heading-1': 'text-64px font-bold text-fire',
    'heading-2': 'text-56px font-bold text-fire',
    'heading-3': 'text-48px font-semibold text-fire',
    'heading-4': 'text-36px font-semibold text-charcoal',
    'heading-5': 'text-28px font-medium text-charcoal',
  }
})

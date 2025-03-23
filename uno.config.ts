import {
  defineConfig,
  presetIcons,
  presetWind3,
  transformerDirectives,
} from 'unocss'

/**
 * https://unocss.dev/integrations/astro#notes
 * client:only components must be placed in components folder or added to UnoCSS's content config in order to be processed.
 */
export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetWind3(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        height: '2rem',
        width: '2rem',
      },
    }),
  ],
})

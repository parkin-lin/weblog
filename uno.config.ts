import { transformerDirectives } from 'unocss'
import { defineConfig } from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives()],
})

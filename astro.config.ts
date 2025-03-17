// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import UnoCSS from 'unocss/astro'
import react from '@astrojs/react'
import rehypeLinks from 'rehype-external-links'
import cloudflare from '@astrojs/cloudflare'

const isDev = import.meta.env.DEV

export default defineConfig({
  site: 'https://weblog.pages.dev',
  integrations: [react(), mdx(), sitemap(), UnoCSS({ injectReset: true })],
  markdown: {
    rehypePlugins: [
      [
        rehypeLinks,
        {
          content: {
            type: 'text',
            value: ' 🔗',
          },
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
        },
      ],
    ],
  },
  devToolbar: {
    enabled: isDev,
  },
  output: 'server',
  adapter: cloudflare(),
})

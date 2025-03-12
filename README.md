# Project Roadmap

## Integrations

- ✅ corepack & pnpm
- ✅ Commitlint & Commitizen
- ✅ simple-git-hooks
- ✅ UnoCSS
- ✅ React & JSX
- ✅ Astro

## Blog Features

- ✅ Sitemap
- ✅ RSS Feed
- ✅ Markdown & MDX
- [ ] Last modified time
- [ ] giscus
- [ ] Reading time
- [ ] i18n

## 🚀 Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

## CLI & Frontend Engineering

| Commands       | Actions                                |
| :------------- | :------------------------------------- |
| `pnpm install` | Install dependencies                   |
| `pnpm dev`     | Start local dev server                 |
| `pnpm cm`      | Lint `git commit`                      |
| `pnpm build`   | Build production site to `./dist/`     |
| `pnpm preview` | Preview build locally before deploying |

## Another Commands

All commands are run from the root of the project, from a terminal:

| Commands               | Actions                                          |
| :--------------------- | :----------------------------------------------- |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

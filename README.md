# Michaela Barnes — Writer

Source for [michaela-barnes.com](https://michaela-barnes.com), the portfolio site of
Michaela Barnes, a writer of essays and short stories.

Built with [Astro](https://astro.build) (static, mostly zero-JS) with a warm,
editorial design system. Deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the built site
```

## Project structure

- `src/pages/` — file-based routes (clean URLs, one HTML file per route).
- `src/layouts/` — `BaseLayout`, `ArticleLayout` (essays), `DetailLayout` (experience/education).
- `src/components/` — header, footer, cards, gallery, SEO head.
- `src/content/writing/` — essays & short stories as Markdown (a content collection).
- `src/data/` — `site.ts` (identity/nav/social), `experience.ts`, `education.ts`, `photos.ts`.
- `src/styles/global.css` — design tokens (paper/ink palette, Fraunces + Newsreader type).
- `src/assets/` — images optimized at build time via Astro's `<Image>`.
- `public/` — `CNAME` (custom domain), `.nojekyll`, favicons, `og-default.png`, `robots.txt`.

## Adding content

- **A new essay:** drop a Markdown file into `src/content/writing/`. Frontmatter fields:
  `title`, `date`, `publication`, `publicationUrl`, `externalUrl`, `dek`, `cover`, `featured`.
- **Experience / education:** add a record to `src/data/experience.ts` or
  `src/data/education.ts`. Fill in `body` to replace the "on the way" placeholder;
  set `draft: true` to keep an entry out of listings.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. A manual fallback (`npm run deploy`) publishes `./dist`
via the `gh-pages` package.

## License

Attribution-NonCommercial-NoDerivatives 4.0 International. See LICENSE and
http://creativecommons.org/licenses/by-nc-nd/4.0/.

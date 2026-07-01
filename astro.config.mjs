// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Apex custom domain (see public/CNAME). No `base` needed — the site is
  // served from the domain root, not a /repo subpath.
  site: 'https://michaela-barnes.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  image: {
    // Default sharp service; used by <Image /> for responsive WebP/AVIF.
    responsiveStyles: true,
  },
});

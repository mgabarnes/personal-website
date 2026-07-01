import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Long-form writing (essays & short stories). Body lives in Markdown/MDX so
// new pieces are added by dropping a file into src/content/writing/.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publication: z.string().optional(),
      publicationUrl: z.string().url().optional(),
      date: z.coerce.date(),
      // Canonical location of the published piece, when hosted elsewhere.
      externalUrl: z.string().url().optional(),
      // One-line standfirst / summary shown on cards and the essay header.
      dek: z.string().optional(),
      cover: image().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { writing };

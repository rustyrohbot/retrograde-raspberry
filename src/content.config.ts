import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Keep your existing blog collection
const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		pinned: z.boolean().optional().default(false), // Add pinned field
		tags: z.array(z.string()).optional().default([]), // Add tags field
	}),
});

// Add the new projects collection
const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '*.json' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    url: z.string().url(),
    status: z.enum(['COMPLETE', 'ACTIVE', 'ABANDONED']).optional(),
		featured: z.boolean().default(false)  })
});

// Export both collections
export const collections = {
  blog,
  projects
};

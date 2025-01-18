import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    description: z.string(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

const product = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    status: z.enum(['completed', 'in-progress', 'planned']),
    tags: z.array(z.string()),
    description: z.string(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
  product,
};
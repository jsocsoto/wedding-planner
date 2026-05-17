import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title:         z.string(),
  description:   z.string(),
  date:          z.string(),
  category:      z.string(),
  image:         z.string().optional(),
  imagePosition: z.string().optional(),
});

export const collections = {
  'blog-en': defineCollection({ type: 'content', schema: postSchema }),
  'blog-es': defineCollection({ type: 'content', schema: postSchema }),
};

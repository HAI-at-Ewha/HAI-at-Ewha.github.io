import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});

const peopleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    group: z.enum(['pi', 'master', 'undergrad-prospective', 'research-intern', 'alumni']),
    position: z.string().optional(),
    email: z.string().email().optional(),
    profileImage: z.string().optional(),
    researchAreas: z.array(z.string()).default([]),
    interests: z.array(z.string()).default([]),
    education: z.array(z.string()).default([]),
    note: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
          icon: z.enum(['github', 'scholar', 'homepage']).default('homepage'),
        })
      )
      .default([]),
    order: z.number().default(100),
  }),
});

const datasetCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    thumbnail: z.string().optional(),
    paperUrl: z.string().url().optional(),
    downloadUrl: z.string().url().optional(),
    order: z.number().default(100),
  }),
});

const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number().int(),
    venueShort: z.string().optional(),
    venueFull: z.string(),
    type: z.string().default('Conference'),
    doi: z.string().url().optional(),
    code: z.string().url().optional(),
    dataset: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = {
  news: newsCollection,
  people: peopleCollection,
  datasets: datasetCollection,
  publications: publicationsCollection,
};

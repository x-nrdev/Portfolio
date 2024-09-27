import { defineCollection, z } from 'astro:content'

const jobSchema = z.object({
    title: z.string(),
    date: z.string(),
    skills: z.string().array().optional(),
    link: z.string().optional(),
})

const jobCollection = defineCollection({
    type: 'content',
    schema: jobSchema,
})

export const collections = {
    jobs: jobCollection,
}
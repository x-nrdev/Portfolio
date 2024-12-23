import { defineCollection, z } from 'astro:content'

// Schemas
const jobSchema = z.object({
    title: z.string(),
    date: z.string(),
    skills: z.string().array().optional(),
    link: z.string().optional(),
})

const projectSchema = z.object({
    title: z.string(),
    date: z.date().optional(),
    order: z.number().optional(),
    imageSrc: z.string().optional(),
    skills: z.string().array().optional(),
    link: z.string().optional(),
})

const certificateSchema = z.object({
    title: z.string(),
    subTitle: z.string(),
    date: z.date(),
    link: z.string().optional(),
})

// Collections
const jobCollection = defineCollection({
    type: 'content',
    schema: jobSchema,
})

const projectCollection = defineCollection({
    type: 'content',
    schema: projectSchema,
})
const certificateCollection = defineCollection({
    type: 'content',
    schema: certificateSchema,
})

export const collections = {
    jobs: jobCollection,
    projects: projectCollection,
    certificates: certificateCollection,
}
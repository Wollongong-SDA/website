import { defineCollection, z } from 'astro:content'
import directus from './lib/directus'
import { readItems } from '@directus/sdk'

const locations = defineCollection({
  loader: async () => {
    const collection = await directus.request(readItems('locations'))
    return collection.map((item) => {
      return {
        ...item,
        id: String(item.id),
      }
    })
  },
  schema: z.object({
    id: z.string(),
    status: z.string(),
    sort: z.optional(z.number()),
    content: z.string(),
    background: z.string().uuid(),
    logo: z.string().uuid(),
    name: z.string(),
    slug: z.string(),
    overview: z.string(),
  }),
})

const ministries = defineCollection({
  loader: async () => {
    const collection = await directus.request(readItems('ministries'))
    return collection.map((item) => {
      return {
        ...item,
        id: String(item.id),
      }
    })
  },
  schema: z.object({
    id: z.string().uuid(),
    status: z.string(),
    sort: z.optional(z.number()),
    content: z.string(),
    background: z.string().uuid(),
    preview: z.string().uuid().nullable(),
    name: z.string(),
    slug: z.string(),
    overview: z.string(),
  }),
})

const contacts = defineCollection({
  loader: async () => {
    const collection = await directus.request(readItems('contacts'))
    return collection.map((item) => {
      return {
        ...item,
        id: String(item.id),
      }
    })
  },
  schema: z.object({
    id: z.string(),
    status: z.string(),
    sort: z.optional(z.number()),
    name: z.string(),
    details: z.string(),
  }),
})

const pages = defineCollection({
  loader: async () => {
    const collection = await directus.request(readItems('pages'))
    return collection.map((item) => {
      return {
        ...item,
        id: String(item.id),
      }
    })
  },
  schema: z.object({
    id: z.string().uuid(),
    status: z.string(),
    title: z.string(),
    slug: z.string(),
    details: z.string(),
  }),
})


export const collections = { locations, ministries, contacts, pages }

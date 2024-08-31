import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'b038sstv',
  dataset: 'production',
  apiVersion: '2024-10-08', // Utilisez la date du jour
  useCdn: true, // `false` si vous souhaitez obtenir les données les plus récentes
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

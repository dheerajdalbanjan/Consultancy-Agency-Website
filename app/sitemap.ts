import { connectMongo } from '@/libs/mongodb';
import Blog from '@/model/blog';
import { MetadataRoute } from 'next'

export const revalidate = 3600 ;

export default async function sitemap(): Promise<MetadataRoute.Sitemap>  {

  let posts: MetadataRoute.Sitemap  ;
    await connectMongo() ;
    const data = await Blog.find({}) ;
    posts = data.map(e => ({
        url: `https://oursoulss.com/blog/${e.slug}`,
        lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }))


  return [
    {
      url: 'https://oursoulss.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://oursoulss.com/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://oursoulss.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://oursoulss.com/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://oursoulss.com/privacy_policy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://oursoulss.com/login',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://oursoulss.com/signup',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...posts
  ]
}

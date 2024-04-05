import { MetadataRoute } from 'next'

const sitemap = process.env.NEXT_PUBLIC_COUNTRY === "Singapore"
  ? "https://calvarycarpentry.com/sitemap.xml"
  : "https://calvarycarpentry.com.my/sitemap.xml"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/',
    },
    sitemap,
  }
}

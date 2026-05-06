import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const BASE =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://venusgrandeurevents.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}

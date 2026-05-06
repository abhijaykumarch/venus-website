import type { MetadataRoute } from 'next';
import { EVENTS } from '@/lib/events';

const BASE = process.env.NEXT_PUBLIC_BASE_URL || 'https://venusgrandeurevents.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = (
    ['', '/about', '/services', '/gallery', '/contact'] as const
  ).map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
  const eventRoutes: MetadataRoute.Sitemap = EVENTS.map((e) => ({
    url: `${BASE}/gallery/${e.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));
  return [...staticRoutes, ...eventRoutes];
}

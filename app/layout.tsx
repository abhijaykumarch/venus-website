import { Playfair_Display, Manrope } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://venusgrandeurevents.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Venus Grandeur Events · Luxury Event Management',
    template: '%s',
  },
  description:
    'Venus Grandeur Events is a private atelier crafting luxury weddings, corporate galas and destination celebrations with elegance and precision.',
  keywords: [
    'luxury event management',
    'wedding planner',
    'corporate events',
    'destination weddings',
    'Venus Grandeur',
    'private events atelier',
  ],
  authors: [{ name: 'Venus Grandeur Events' }],
  creator: 'Venus Grandeur Events',
  icons: { icon: '/logo.png', apple: '/logo.png' },
  openGraph: {
    title: 'Venus Grandeur Events · Where Every Moment Becomes a Memory',
    description:
      'Luxury event management for weddings, corporate galas, and destination celebrations.',
    url: SITE_URL,
    siteName: 'Venus Grandeur Events',
    images: [
      { url: '/logo.png', width: 1200, height: 630, alt: 'Venus Grandeur Events' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venus Grandeur Events',
    description: 'Luxury event management atelier.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#2E0D2E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://videos.pexels.com" />
      </head>
      <body className="min-h-screen bg-white text-brand-darkpurple">
        {children}
      </body>
    </html>
  );
}

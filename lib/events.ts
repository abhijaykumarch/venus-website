// Shared events data source for gallery + detail pages

export type EventCategory = 'Wedding' | 'Corporate' | 'Destination';

export interface VenusEvent {
  slug: string;
  title: string;
  category: EventCategory;
  location: string;
  date: string;
  guests: number;
  venue: string;
  theme: string;
  hero: string;
  excerpt: string;
  story: string[];
  gallery: string[];
}

export const EVENTS: VenusEvent[] = [
  {
    slug: 'a-ceremony-in-gold',
    title: 'A Ceremony in Gold',
    category: 'Wedding',
    location: 'Udaipur, India',
    date: 'November 2024',
    guests: 320,
    venue: 'The Oberoi Udaivilas',
    theme: 'Ivory, Gold & Marigold',
    hero: '/gold01.png',
    excerpt:
      'A three-day Indian wedding composed around the quiet grandeur of Lake Pichola \u2014 gilded mandaps, candlelit courtyards, and a private dinner beneath the stars.',
    story: [
      'The celebration began with an intimate mehendi ceremony set in a palace courtyard, brought to life with marigold décor, live sitar performances, and handcrafted brass elements that reflected the richness of Indian traditions.',
      'Every detail was curated locally to preserve authenticity — from floral arrangements to artisanal décor — creating a wedding deeply connected to its cultural roots.',
      'The wedding ceremony took place on a grand mandap overlooking the lake, designed with ivory florals, gold accents, and traditional textures. Guests arrived by boat at sunset, welcomed with live classical music that set the tone for an unforgettable evening.',
      'The reception transformed the palace into a royal dining experience, illuminated with candlelight and statement floral installations. A curated multi-course menu paired with live performances and a grand fireworks finale marked the perfect conclusion.',
    ],
    gallery: [
      '/gold02.jpeg',
      '/gold03.jpeg',
      '/gold04.jpeg',
      '/gold05.jpeg',
    ],
  },
  {
    slug: 'the-illumination-gala',
    title: 'The Illumination Gala',
    category: 'Corporate',
    location: 'Mumbai, India',
    date: 'March 2025',
    guests: 540,
    venue: 'Jio World Convention Centre, Mumbai',
    theme: 'Obsidian Black & Gold Illumination',
    hero: '/cor02.png',
    excerpt:
      'A flagship brand launch crafted as a theatrical evening — combining advanced lighting, live performance, and high-end production for an elite Indian audience.',
    story: [
      'The brief was ambitious — create a brand launch that feels like a spectacle, not a conventional corporate event.',
      'We conceptualized the evening as a three-act experience, beginning with a grand arrival featuring ambient lighting, digital installations, and curated soundscapes that set the tone for what followed.',
      'At the centre of the production stood a 40-foot kinetic lighting structure, programmed to move in sync with music and visuals during the main reveal. The unveiling moment was elevated with live choreography, integrating performance with technology to deliver a powerful visual impact.',
      'The dining experience was designed with long-format seating, mirror-finish surfaces, and gold-accent detailing — creating a refined yet high-energy atmosphere suited for India’s top-tier corporate clientele.',
    ],
    gallery: [
      '/cor03.jpeg',
      '/cor01.jpeg',
      'https://images.pexels.com/photos/14646769/pexels-photo-14646769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1600',
      '/cor04.jpeg',
    ],
  },
  {
    slug: 'dinner-under-the-stars',
    title: 'Dinner Under the Stars',
    category: 'Destination',
    location: 'Jaipur, India',
    date: 'June 2024',
    guests: 200,
    venue: 'Private Heritage Estate, Jaipur',
    theme: 'Ivory, Olive Green & Candlelight Gold',
    hero: '/din01.png',
    excerpt:
      'A bespoke wedding evening featuring long-table dining, handcrafted décor, and thousands of candles — creating a magical atmosphere for a close-knit celebration.',
    story: [
      'Designed as a deeply personal wedding celebration, the evening focused on creating a warm and memorable experience rather than a grand spectacle.',
      'The venue was transformed into an open-air dining setting inspired by Indian courtyard aesthetics, with a single long table styled using natural fabrics, floral arrangements, and soft ambient lighting.',
      'Each detail was thoughtfully curated — from hand-written place settings to locally sourced décor elements — reflecting a blend of simplicity and luxury rooted in Indian traditions.',
      'As the evening progressed, thousands of candles were lit across the space, creating a soft golden glow that defined the mood of the celebration. Live acoustic music and subtle performances added to the intimacy without overpowering the experience.',
    ],
    gallery: [
      '/din05.jpeg',
      '/din04.jpeg',
      '/din02.jpeg',
      '/din03.jpeg',
    ],
  },
  {
    slug: 'where-the-ocean-whispered',
    title: 'Where the Ocean Whispered',
    category: 'Wedding',
    location: 'Goa, India',
    date: 'November 2025',
    guests: 90,
    venue: 'Private Beachfront Villa, North Goa',
    theme: 'Ivory, Sand Beige & Soft Gold',
    hero: '/oce01.png',
    excerpt:
      'An intimate seaside ceremony designed with minimal elegance — featuring soft florals, warm lighting, and the Arabian Sea as a natural backdrop.',
    story: [
      'The vision was simple — let the ocean be the highlight of the celebration.',
      'We designed the entire experience around a clean, minimal aesthetic, using neutral tones, soft florals, and open spaces that allowed the natural surroundings to take centre stage.',
      'The ceremony setup featured a custom mandap-inspired structure overlooking the sea, styled with light drapes, pastel florals, and subtle gold accents. As the sun set, the space transformed into a warm, ambient environment with layered lighting and candle elements.',
      'Guest seating and lounge areas were arranged to maintain intimacy while ensuring clear views of the ceremony and the coastline.',
    ],
    gallery: [
      '/oce02.jpeg',
      '/oce03.jpeg',
      '/oce04.jpeg',
      '/oce05.jpeg',
      '/oce06.jpeg',
    ],
  },
  {
    slug: 'house-of-aurelian',
    title: 'House of Aurelian',
    category: 'Corporate',
    location: 'New Delhi, India',
    date: 'February 2025',
    guests: 250,
    venue: 'Taj Palace, New Delhi',
    theme: 'Midnight Black, Ivory & Heritage Gold',
    hero: '/au01.png',
    excerpt:
      'An anniversary gala designed as an immersive brand experience — blending storytelling, performance, and refined hospitality for India’s top corporate leaders.',
    story: [
      'The objective was to create more than a celebration — it had to reflect the journey, values, and legacy of the organisation.',
      'We designed the evening as a living narrative, where each space represented a phase of the company’s growth. Archival elements, curated installations, and visual storytelling transformed the venue into an experiential walkthrough of its 20-year journey.',
      'A specially composed musical performance was integrated into the evening, synchronised with visual transitions to create a seamless storytelling experience during the main program.',
      'The dining setup was designed with a refined aesthetic — combining classic layouts with subtle gold accents and modern lighting to reflect both heritage and forward momentum.',
    ],
    gallery: [
      '/au02.png',
      '/au03.png',
      '/au04.png',
    ],
  },
  {
    slug: 'a-sunset-to-remember',
    title: 'A Sunset to Remember',
    category: 'Wedding',
    location: 'Alibag, India',
    date: 'July 2024',
    guests: 120,
    venue: 'Private Beachfront Estate, Alibag',
    theme: 'Blush, Ivory & Sunset Gold',
    hero: '/sun01.jpeg',
    excerpt:
      'An intimate seaside wedding experience where floral artistry, warm lighting, and the rhythm of the ocean came together to create a moment that felt both grand and personal.',
    story: [
      'The concept was centred around a single idea — capturing the perfect sunset moment as the couple began their new journey.',
      'We designed a mandap overlooking the sea, adorned with cascading florals, traditional elements, and soft lighting that enhanced the natural beauty of the setting without overpowering it.',
      'The guest experience was intentionally intimate, with seating arranged to maintain clear views of both the ceremony and the ocean backdrop.',
      'As the sun dipped below the horizon, the ceremony transitioned seamlessly into an evening celebration, with ambient lighting, curated music, and a refined dining setup that extended the experience.',
    ],
    gallery: [
      '/sun02.jpeg',
      '/sun03.jpeg',
      '/sun05.jpeg',
      '/sun04.jpeg',
    ],
  },
  {
    slug: 'vows-among-white-peonies',
    title: 'Vows Among White Peonies',
    category: 'Wedding',
    location: 'Himachal Pradesh, India',
    date: 'April 2025',
    guests: 100,
    venue: 'Private Mountain Estate, Himachal Pradesh',
    theme: 'Ivory, Blush & Natural Green',
    hero: '/vo01.png',
    excerpt:
      'An intimate Sikh wedding experience designed in a natural setting — blending floral elegance, spiritual depth, and breathtaking mountain views.',
    story: [
      'The vision was to create a wedding that felt शांत, spiritual, and deeply connected to both nature and Sikh traditions.',
      'The Anand Karaj ceremony was held in an open mountain setting, beneath a floral canopy crafted with white and blush peonies. The mandap-style structure was designed to remain minimal, ensuring that the focus stayed on the sacred rituals and the surrounding landscape.',
      'The Guru Granth Sahib was placed with utmost respect, and the seating was arranged in a traditional format, allowing all guests to witness the ceremony in a calm and intimate environment.',
      'Live kirtan echoed through the hills, adding depth and serenity to the experience, while the natural backdrop elevated the entire atmosphere without the need for excessive décor.',
    ],
    gallery: [
      '/vo02.jpeg',
      '/vo03.jpeg',
      '/vo04.jpeg',
    ],
  },
  {
    slug: 'crystal-and-candlelight',
    title: 'Crystal & Candlelight',
    category: 'Destination',
    location: 'Uttrakhand, India',
    date: 'September 2025',
    guests: 120,
    venue: 'Private Mountain Resort, Mussoorie',
    theme: 'Crimson Red, Ivory & Candlelight Gold',
    hero: '/cr01.png',
    excerpt:
      'An elevated wedding evening designed with rich red florals, ambient lighting, and a breathtaking mountain backdrop — creating a setting that felt both intimate and grand.',
    story: [
      'The concept focused on creating a dramatic yet refined wedding setting within a natural mountain landscape.',
      'A statement mandap structure was designed using dense red florals, forming a bold visual centrepiece against the serene backdrop of the hills. The design balanced richness with restraint, allowing the surroundings to remain an integral part of the experience.',
      'As evening approached, the space transformed through layers of candlelight and warm ambient illumination, creating depth, contrast, and a sense of intimacy.',
      'Guest seating and lounge areas were arranged to maintain clear sightlines while preserving a comfortable, immersive environment.',
    ],
    gallery: [
      '/cr02.png',
      '/cr03.jpeg',
    ],
  },
  {
    slug: 'an-intimate-feast',
    title: 'An Intimate Feast',
    category: 'Wedding',
    location: 'Meerut, India',
    date: 'October 2025',
    guests: 250,
    venue: 'Hyphen Premier Meerut',
    theme: 'Crimson Red, Saffron & Antique Gold',
    hero: '/red01.jpeg',
    excerpt:
      'A bespoke mehendi and sangeet evening brought to life through layered florals, architectural backdrops, and a warm, immersive atmosphere.',
    story: [
      'The brief was to transform a private space into a high-impact pre-wedding celebration that felt intimate yet visually grand.',
      'We designed the setting as a courtyard-inspired experience, incorporating detailed arches, jaali-style patterns, and handcrafted elements to create depth and richness.',
      'The stage became the focal point of the evening — a lounge-style setup framed by dense floral installations in deep red tones, balanced with warm lighting to enhance the overall mood.',
      'The result was a celebration that felt immersive, festive, and elevated — redefining what a private wedding event can look like.',
    ],
    gallery: [
      '/red01.jpeg',
      '/red03.jpeg',
      '/red02.jpeg',
    ],
  },
];

export const getEventBySlug = (slug: string): VenusEvent | undefined =>
  EVENTS.find((e) => e.slug === slug);

export const getAdjacentEvents = (
  slug: string
): { prev: VenusEvent | null; next: VenusEvent | null } => {
  const idx = EVENTS.findIndex((e) => e.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const prev = EVENTS[(idx - 1 + EVENTS.length) % EVENTS.length];
  const next = EVENTS[(idx + 1) % EVENTS.length];
  return { prev, next };
};

export const getRelatedEvents = (
  slug: string,
  category: EventCategory,
  count = 3
): VenusEvent[] =>
  EVENTS.filter((e) => e.slug !== slug && e.category === category).slice(0, count);

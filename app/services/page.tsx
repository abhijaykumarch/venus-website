import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Services · Venus Grandeur Events',
  description:
    'Luxury weddings, corporate galas, and destination celebrations — a full-service atelier for the most important evenings.',
};

interface ServiceBlock {
  tag: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  includes: string[];
}

const SERVICES: ServiceBlock[] = [
  {
    tag: '01',
    title: 'Luxury Weddings',
    tagline: 'A wedding composed like a story.',
    image:
      'ser01.jpeg',
    description:
      'From the first intimate gathering to the closing dance, we design and deliver every ritual, room, and moment. Multi-day ceremonies, heritage venues, and private palace weddings across India and the world.',
    includes: [
      'Creative direction & concept',
      'Multi-day programming',
      'Floral & scenography',
      'Catering & bespoke menus',
      'Entertainment & live music',
      'Invitations & keepsakes',
    ],
  },
  {
    tag: '02',
    title: 'Corporate Events',
    tagline: 'The boardroom, reimagined as theatre.',
    image:
      'cor01.jpeg',
    description:
      'Brand launches, private galas, executive retreats and anniversary dinners produced at flagship standard. We work with leadership teams, marketing houses and private offices to deliver evenings that mean something.',
    includes: [
      'Strategy & narrative design',
      'Staging, lighting & AV',
      'Speaker & talent management',
      'Guest journey & hospitality',
      'On-brand print & keepsakes',
      'Discreet logistics',
    ],
  },
  {
    tag: '03',
    title: 'Destination Events',
    tagline: 'Anywhere in the world, composed as home.',
    image:
      'des01.jpeg',
    description:
      'From clifftops in Santorini to riads in Marrakech, we build events from the ground up in places we know intimately — with trusted local partners, and the rigour of our own team on the ground.',
    includes: [
      'Location sourcing & scouting',
      'Travel & guest concierge',
      'Local supplier curation',
      'Permits & production',
      'Full on-site team',
      'End-to-end coordination',
    ],
  },
  {
    tag: '04',
    title: 'Concerts & Performances',
    tagline: 'The stage is set for unforgettable moments.',
    image:
      'con01.jpeg',
    description:
      'High-energy live events with full-scale production, artist management, and flawless execution.',
    includes: [
    'Stage design & production',
      'Lighting, sound & AV setup',
      'Artist & DJ management',
      'Crowd flow & security planning',
      'Show direction & choreography',
      'On-ground execution & logistics',
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="relative bg-white">
      <Navigation />

      <section className="relative bg-brand-darkpurple pt-32 pb-20 text-white">
        <div className="pointer-events-none absolute inset-6 hidden border border-brand-gold/15 md:block" />
        <div className="container text-center">
          <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
            Our Services
          </p>
          <h1 className="font-display text-5xl leading-[1.1] text-balance md:text-6xl lg:text-7xl">
            One Standard.
            <br />
            <span className="gold-gradient-text italic">Across Every Event We Create.</span>
          </h1>
          <div className="hairline mx-auto mt-10 w-24" />
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70">
            Every event — regardless of size — is delivered with the same level of planning, production, and attention to detail.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container space-y-28 md:space-y-40">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`grid gap-10 lg:grid-cols-2 lg:gap-20 ${
                i % 2 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-luxury">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-3 border border-brand-gold/30" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-display text-xs tracking-[0.4em] text-brand-gold">
                  — {s.tag}
                </p>
                <h2 className="mt-5 font-display text-4xl text-brand-darkpurple text-balance md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-4 font-display italic text-lg text-brand-purple">
                  {s.tagline}
                </p>
                <p className="mt-6 text-base leading-[1.8] text-brand-darkpurple/80">
                  {s.description}
                </p>
                <div className="mt-8">
                  <p className="mb-4 text-[0.65rem] uppercase tracking-[0.35em] text-brand-gold">
                    What&apos;s Included
                  </p>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {s.includes.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-start gap-3 text-sm text-brand-darkpurple/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-brand-purple px-6 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-brand-purple transition hover:-translate-y-0.5 hover:bg-brand-purple hover:text-white hover:shadow-glow-purple"
                >
                  Enquire About {s.title}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default ServicesPage;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { VenusEvent, EventCategory } from '@/lib/events';

interface GalleryGridProps {
  events: VenusEvent[];
}

type FilterValue = 'All' | EventCategory;

const FILTERS: FilterValue[] = ['All', 'Wedding', 'Corporate', 'Destination'];

const GalleryGrid = ({ events }: GalleryGridProps) => {
  const [filter, setFilter] = useState<FilterValue>('All');
  const items = events.filter((g) => filter === 'All' || g.category === filter);

  return (
    <section className="relative bg-white">
      <div className="container flex flex-wrap items-center justify-center gap-3 pb-12">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-5 py-2 text-[0.65rem] uppercase tracking-[0.3em] transition ${
              filter === f
                ? 'border-brand-gold bg-brand-gold text-brand-darkpurple shadow-glow-gold'
                : 'border-black/10 text-brand-darkpurple/70 hover:border-brand-purple hover:text-brand-purple'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="container pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (idx % 6) * 0.06 }}
            >
              <Link
                href={`/gallery/${item.slug}`}
                className="group relative block overflow-hidden rounded-sm shadow-luxury  focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <Image
                src={item.hero}
                alt={item.title}
                width={1600}
                height={1000}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="w-full h-auto transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkpurple/85 via-brand-darkpurple/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-brand-gold">
                    {item.category} · {item.location}
                  </p>
                  <h3 className="mt-1 font-display text-xl md:text-2xl">{item.title}</h3>
                  <p className="mt-3 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.35em] text-brand-gold opacity-0 transition group-hover:opacity-100">
                    View Event →
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-3 rounded-sm border border-brand-gold/0 transition group-hover:border-brand-gold/60" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;

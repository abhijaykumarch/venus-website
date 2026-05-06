'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  tag: string;
}

const SERVICES: ServiceCard[] = [
  {
    title: 'Luxury Weddings',
    description:
      'Bespoke ceremonies crafted with romantic elegance \u2014 from intimate rituals to grand ballroom celebrations.',
    image:
      'ser01.jpeg',
    tag: '01',
  },
  {
    title: 'Corporate Events',
    description:
      'Sophisticated galas, product launches and executive retreats delivered with unmatched precision.',
    image:
      'cor01.jpeg',
    tag: '02',
  },
  {
    title: 'Destination Events',
    description:
      'From ocean-side ceremonies to palace soir\u00e9es, we orchestrate every detail across the world.',
    image:
      'des01.jpeg',
    tag: '03',
  },
  {
    title: 'Concerts & Performances',
    description:
      'High-energy live events with full-scale production, artist management, and flawless execution.',
    image:
      'con01.jpeg',
    tag: '04',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-white py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-2xl text-center md:mb-20"
        >
          <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
            Our Signatures
          </p>
          <h2 className="font-display text-4xl text-brand-darkpurple text-balance md:text-5xl">
            A Portfolio of Refined Celebrations
          </h2>
          <div className="hairline mx-auto mt-8 w-24" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Each event is composed with intention — every flower, light, and
            moment selected to honour your story.
          </p>
        </motion.div>

         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
            >
              <Link
                href="/services"
                className="group relative block overflow-hidden rounded-sm bg-white shadow-luxury transition-all duration-500 hover:shadow-glow-purple"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkpurple/80 via-brand-darkpurple/10 to-transparent" />
                  <span className="absolute left-6 top-6 font-display text-xs tracking-[0.4em] text-brand-gold">
                    — {service.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-display text-2xl font-medium md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-gold opacity-80 transition group-hover:opacity-100">
                    Discover
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

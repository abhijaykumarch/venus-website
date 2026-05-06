import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { EVENTS } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Portfolio · Venus Grandeur Events',
  description:
    'A curated portfolio of luxury weddings, corporate galas and destination celebrations by Venus Grandeur Events.',
};

const GalleryPage = () => {
  return (
    <main className="relative bg-white">
      <Navigation />

      <section className="relative bg-brand-darkpurple pt-32 pb-20 text-white">
        <div className="pointer-events-none absolute inset-6 hidden border border-brand-gold/15 md:block" />
        <div className="container text-center">
          <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
            Our Portfolio
          </p>
          <h1 className="font-display text-5xl leading-[1.1] text-balance md:text-6xl lg:text-7xl">
            Moments We&apos;ve
            <br />
            <span className="gold-gradient-text italic">Composed</span>
          </h1>
          <div className="hairline mx-auto mt-10 w-24" />
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70">
            A selection of private celebrations, galas and destination events
            crafted by our atelier across the world.
          </p>
        </div>
      </section>

      <div className="bg-white pt-16">
        <GalleryGrid events={EVENTS} />
      </div>

      <CTA />
      <Footer />
    </main>
  );
};

export default GalleryPage;

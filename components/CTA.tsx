'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-darkpurple py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-purple/50 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-gold/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-6 hidden border border-brand-gold/15 md:block" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center text-white"
        >
          <p className="mb-5 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
            Begin the Journey
          </p>
          <h2 className="font-display text-4xl leading-[1.1] text-balance md:text-6xl">
            Ready to Create Something
            <br />
            <span className="gold-gradient-text italic">Extraordinary?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70">
            Share your vision with our atelier. We&apos;ll compose a celebration
            as singular as you.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-gold px-10 py-4 text-sm font-medium uppercase tracking-[0.3em] text-brand-darkpurple shadow-glow-gold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-glow-duo"
            >
              Begin Your Event
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+910000000000"
              className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-brand-gold"
            >
              or call our atelier
            </a>
          </div>

          <div className="hairline mx-auto mt-16 w-40" />
          <p className="mt-8 text-xs uppercase tracking-[0.4em] text-white/50">
            Venus Grandeur Events · Est. 2025 · Private Atelier
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

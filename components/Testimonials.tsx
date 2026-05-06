'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Everything was executed flawlessly. The decor, the lighting, the timing — every detail was on point. It felt bigger than we imagined.',
    name: 'Ananya & Rohan Mehta',
    role: 'Wedding \u2025 Udaipur',
  },
  {
    quote:
      'Professional, fast, and extremely well-organized. They handled a 1000+ guest event without a single issue.',
    name: 'Priya Narayanan',
    role: 'CMO, Aurelian Capital',
  },
  {
    quote:
      'The energy, the crowd management, the stage — everything was next level. You don’t see this level of execution often.',
    name: 'Arun Aggarwal',
    role: 'Concert \u2026 Faridabad',
  },
  {
    quote:
      'They don’t just plan events — they control the entire experience. That’s what makes the difference.',
    name: 'Private Client',
    role: 'Party \u2025 Delhi',
  },
  {
    quote:
      'We hosted a destination wedding with 200+ guests, and everything — travel, stay, and events — was managed seamlessly. No delays, no confusion. It was a dream come true.',
    name: 'Taniya & Sarthak Gupta',
    role: 'Destination Wedding \u2025 Goa',
  },
  {
    quote:
      'The level of detail and control they bring is rare. Every moment felt intentional, smooth, and perfectly executed.',
    name: 'Tanushree & Aryan Kapoor',
    role: 'Wedding \u2026 Gurgaon',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-brand-softgray py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-2xl text-center md:mb-20"
        >
          <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
            Kind Words
          </p>
          <h2 className="font-display text-4xl text-brand-darkpurple text-balance md:text-5xl">
            Trusted by Those Who Expect Excellence
          </h2>
          <div className="hairline mx-auto mt-8 w-24" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="relative flex h-full flex-col justify-between rounded-sm border border-black/5 bg-white p-10 shadow-luxury transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-purple"
            >
              <Quote
                className="absolute right-8 top-8 h-8 w-8 text-brand-gold/40"
                aria-hidden="true"
              />
              <blockquote className="font-display text-lg leading-relaxed text-brand-darkpurple md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10">
                <div className="hairline mb-5 w-10" />
                <p className="text-sm font-semibold tracking-wide text-brand-darkpurple">
                  {t.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface EventGalleryProps {
  images: string[];
  title?: string;
}

const EventGallery = ({ images, title = '' }: EventGalleryProps) => {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {images.map((src, idx) => (
          <button
            key={src + idx}
            onClick={() => setActive(idx)}
            className={`group relative overflow-hidden rounded-sm shadow-luxury focus:outline-none focus:ring-2 focus:ring-brand-gold ${
              idx === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'
            }`}
          >
            <Image
              src={src}
              alt={`${title} \u2014 ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkpurple/30 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && images[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-darkpurple/95 backdrop-blur-md"
            onClick={close}
          >
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-gold hover:text-brand-gold hover:shadow-glow-gold"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-gold hover:text-brand-gold hover:shadow-glow-gold md:left-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-gold hover:text-brand-gold hover:shadow-glow-gold md:right-10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={images[active]}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-6 w-full max-w-6xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm shadow-glow-duo">
                <Image
                  src={images[active]}
                  alt={`${title} \u2014 ${active + 1}`}
                  fill
                  priority
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-right text-[0.65rem] uppercase tracking-[0.4em] text-white/50">
                {active + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventGallery;

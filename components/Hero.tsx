'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Pause, ChevronDown } from 'lucide-react';

const HERO_IMAGE =
  'https://images.pexels.com/photos/16935897/pexels-photo-16935897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920';

const HERO_VIDEO =
  'heroclip.mp4';

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
}

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const nav = navigator as Navigator & {
      connection?: NetworkInformation;
      mozConnection?: NetworkInformation;
      webkitConnection?: NetworkInformation;
    };
    const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
    if (conn) {
      if (conn.saveData) return;
      if (['slow-2g', '2g', '3g'].includes(conn.effectiveType || '')) return;
    }
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const idle =
      win.requestIdleCallback ||
      ((cb: () => void) => window.setTimeout(cb, 800));
    const handle = idle(() => setVideoEnabled(true));
    return () => {
      if (win.cancelIdleCallback && typeof handle === 'number')
        win.cancelIdleCallback(handle);
    };
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlaying = () => {
      setVideoReady(true);
      setIsPlaying(true);
    };
    v.addEventListener('playing', onPlaying);
    return () => v.removeEventListener('playing', onPlaying);
  }, [videoEnabled]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) {
      setVideoEnabled(true);
      return;
    }
    if (v.paused) {
      void v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const scrollToServices = () => {
    document
      .getElementById('services')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-darkpurple">
      <Image
        src={HERO_IMAGE}
        alt="Luxury event ballroom with candlelight"
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-1000 ${
          videoReady ? 'opacity-0' : 'opacity-100 scale-105'
        }`}
      />

      {videoEnabled && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darkpurple/60 via-transparent to-brand-darkpurple/85" />
      <div className="pointer-events-none absolute inset-6 hidden border border-brand-gold/20 md:block" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 pt-24">
        <div className="max-w-3xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            className="mx-auto mb-6 flex items-center justify-center"
          >
            <Image
              src="/logo.png"
              alt="Venus Grandeur Events"
              width={400}
              height={350}
              priority
              className="h-64 w-64 drop-shadow-[0_0_40px_rgba(212,175,55,0.35)] sm:h-72 sm:w-72"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="font-display text-4xl font-medium leading-[1.1] text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Where Every Moment
            <br />
            <span className="italic text-white">Becomes a </span>
            <span className="gold-gradient-text italic">Memory</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.9 }}
            className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg"
          >
            Creating unforgettable celebrations with elegance and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3.5 text-sm font-medium uppercase tracking-[0.25em] text-brand-darkpurple transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-glow-duo"
            >
              Start Planning
            </a>
            <a
              href="/gallery"
              className="group inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.25em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-brand-gold hover:text-brand-gold hover:shadow-glow-gold"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
        className="absolute bottom-8 right-8 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all hover:border-brand-gold hover:text-brand-gold hover:shadow-glow-gold"
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>

      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/70 transition hover:text-brand-gold"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;

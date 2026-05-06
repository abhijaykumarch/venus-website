import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'About · Venus Grandeur Events',
  description:
    'The story behind Venus Grandeur Events — a private atelier crafting luxury celebrations with elegance and precision.',
};

interface Value {
  n: string;
  t: string;
  d: string;
}

const VALUES: Value[] = [
  {
    n: '01',
    t: 'Intention',
    d: 'Every element is chosen with purpose. Nothing is decorative for its own sake \u2014 each flower, light, note and line serves the story of the evening.',
  },
  {
    n: '02',
    t: 'Discretion',
    d: 'Our work lives in the rooms of our clients, not on public feeds. We plan as we practice \u2014 quietly, attentively, without noise.',
  },
  {
    n: '03',
    t: 'Craft',
    d: 'We partner with artisans, florists, musicians and chefs whose work is rooted in mastery. We commission, we do not borrow.',
  },
  {
    n: '04',
    t: 'Precision',
    d: 'Luxury is a feeling, but it is built on engineering. Our plans run to the minute \u2014 so the evening does not feel planned at all.',
  },
];

const STATS: [string, string][] = [
  ['5', 'Years of atelier'],
  ['6', 'Countries composed in'],
  ['40+', 'Private celebrations'],
  ['100%', 'By introduction only'],
];

const AboutPage = () => {
  return (
    <main className="relative bg-white">
      <Navigation />

      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-brand-darkpurple">
        <Image
          src="https://images.pexels.com/photos/16935897/pexels-photo-16935897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
          alt="Venus Grandeur Events atelier"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkpurple/60 via-transparent to-brand-darkpurple/90" />
        <div className="pointer-events-none absolute inset-6 hidden border border-brand-gold/20 md:block" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container pt-20 text-white">
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
              The Atelier
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">
              A private house for
              <span className="gold-gradient-text italic"> extraordinary </span>
              celebrations.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
              Our Story
            </p>
            <h2 className="font-display text-3xl text-brand-darkpurple text-balance md:text-4xl">
              Founded in 2015 around a single conviction — that the most
              beautiful evenings are the ones that feel, quietly, like home.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-[1.8] text-brand-darkpurple/80">
            <p>
              Venus Grandeur began with a student who understood how to turn chaos into unforgettable experiences.

              Long before the company was founded, our Managing Director was leading college festivals, coordinating large crowds, handling artists, managing production teams, and bringing ambitious ideas to life under pressure. What started as a passion for organizing events soon evolved into managing weddings and private celebrations — where precision, creativity, and atmosphere mattered even more.
            </p>
            <p>
              With every successful event came one realization: creating grand experiences was not just a skill, it was a calling.
            </p>
            <p>
             That vision became Venus Grandeur — a luxury event and wedding company built to craft celebrations that feel seamless, immersive, and unforgettable. Today, we design weddings, concerts, private soirées, and curated experiences that combine scale, elegance, and emotion into one extraordinary moment.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-brand-darkpurple py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-x-6 hidden border border-brand-gold/15 md:block" />
        <div className="container">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
              Our Values
            </p>
            <h2 className="font-display text-4xl text-balance md:text-5xl">
              Four principles we hold
              <br />
              <span className="gold-gradient-text italic">above all else</span>.
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.n} className="border-t border-brand-gold/30 pt-6">
                <p className="font-display text-xs tracking-[0.4em] text-brand-gold">
                  — {v.n}
                </p>
                <h3 className="mt-5 font-display text-2xl">{v.t}</h3>
                <p className="mt-4 text-sm leading-[1.8] text-white/65">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 text-center md:grid-cols-4">
          {STATS.map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-5xl text-brand-purple md:text-6xl">
                {n}
              </p>
              <div className="hairline mx-auto my-4 w-10" />
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-brand-darkpurple/70">
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default AboutPage;

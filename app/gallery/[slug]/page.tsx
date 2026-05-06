import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Calendar, Users, MapPin, Sparkles, type LucideIcon } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import EventGallery from '@/components/EventGallery';
import {
  EVENTS,
  getEventBySlug,
  getAdjacentEvents,
  getRelatedEvents,
} from '@/lib/events';

interface PageProps {
  params: { slug: string };
}

export const generateStaticParams = () =>
  EVENTS.map((e) => ({ slug: e.slug }));

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const event = getEventBySlug(params.slug);
  if (!event) return { title: 'Event · Venus Grandeur Events' };
  return {
    title: `${event.title} · Venus Grandeur Events`,
    description: event.excerpt,
    openGraph: {
      title: event.title,
      description: event.excerpt,
      images: [event.hero],
    },
  };
};

interface DetailRowProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const DetailRow = ({ icon: Icon, label, value }: DetailRowProps) => (
  <div className="flex items-start gap-4 border-b border-brand-gold/10 pb-5">
    <Icon className="mt-1 h-4 w-4 flex-shrink-0 text-brand-gold" />
    <div>
      <p className="text-[0.6rem] uppercase tracking-[0.35em] text-brand-gold/80">
        {label}
      </p>
      <p className="mt-1 font-display text-base text-white">{value}</p>
    </div>
  </div>
);

const EventDetailPage = ({ params }: PageProps) => {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  const { prev, next } = getAdjacentEvents(event.slug);
  const related = getRelatedEvents(event.slug, event.category, 3);

  return (
    <main className="relative bg-white">
      <Navigation transparent />

      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-brand-darkpurple">
        <Image
          src={event.hero}
          alt={event.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkpurple/70 via-transparent to-brand-darkpurple/90" />
        <div className="pointer-events-none absolute inset-6 hidden border border-brand-gold/20 md:block" />

        <div className="relative z-10 flex h-full flex-col justify-end">
          <div className="container pb-20 pt-28 text-white">
            <Link
              href="/gallery"
              className="mb-8 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.4em] text-white/70 transition hover:text-brand-gold"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Portfolio
            </Link>
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
              {event.category} · {event.location}
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">
              {event.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {event.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="relative -mt-24 pb-24 md:pb-32">
        <div className="container grid gap-12 lg:grid-cols-[1fr_360px]">
          <div className="order-2 lg:order-1 lg:pt-32">
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
              The Story
            </p>
            <h2 className="mb-10 font-display text-3xl text-brand-darkpurple text-balance md:text-4xl">
              How the evening was composed.
            </h2>
            <div className="space-y-6 font-sans text-base leading-[1.8] text-brand-darkpurple/80">
              {event.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="order-1 lg:order-2">
            <div className="sticky top-28 rounded-sm bg-brand-darkpurple p-8 shadow-glow-purple md:p-10">
              <p className="mb-2 text-[0.65rem] uppercase tracking-[0.4em] text-brand-gold">
                Event Details
              </p>
              <div className="hairline mb-8 w-10" />
              <div className="space-y-5">
                <DetailRow icon={Calendar} label="Date" value={event.date} />
                <DetailRow icon={MapPin} label="Venue" value={event.venue} />
                <DetailRow
                  icon={Users}
                  label="Guests"
                  value={`${event.guests} invited`}
                />
                <DetailRow icon={Sparkles} label="Palette" value={event.theme} />
              </div>
              <Link
                href="/contact"
                className="mt-10 flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-darkpurple transition hover:-translate-y-0.5 hover:shadow-glow-duo"
              >
                Plan a Similar Event
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-brand-softgray py-24 md:py-32">
        <div className="container">
          <div className="mb-14 text-center">
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
              Gallery
            </p>
            <h2 className="font-display text-3xl text-brand-darkpurple md:text-4xl">
              Moments from the evening
            </h2>
            <div className="hairline mx-auto mt-6 w-20" />
          </div>
          <EventGallery images={event.gallery} title={event.title} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container grid gap-6 md:grid-cols-2">
          {prev && (
            <Link
              href={`/gallery/${prev.slug}`}
              className="group relative flex aspect-[3/1] items-center overflow-hidden rounded-sm"
            >
              <Image
                src={prev.hero}
                alt={prev.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-darkpurple/70" />
              <div className="relative z-10 flex w-full items-center gap-5 px-8 text-white">
                <ArrowLeft className="h-5 w-5 text-brand-gold transition group-hover:-translate-x-1" />
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-brand-gold">
                    Previous Event
                  </p>
                  <p className="mt-1 font-display text-xl">{prev.title}</p>
                </div>
              </div>
            </Link>
          )}
          {next && (
            <Link
              href={`/gallery/${next.slug}`}
              className="group relative flex aspect-[3/1] items-center overflow-hidden rounded-sm"
            >
              <Image
                src={next.hero}
                alt={next.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-darkpurple/70" />
              <div className="relative z-10 flex w-full items-center justify-end gap-5 px-8 text-right text-white">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-brand-gold">
                    Next Event
                  </p>
                  <p className="mt-1 font-display text-xl">{next.title}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-brand-gold transition group-hover:translate-x-1" />
              </div>
            </Link>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white pb-24 md:pb-32">
          <div className="container">
            <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
                  More {event.category}s
                </p>
                <h2 className="font-display text-3xl text-brand-darkpurple md:text-4xl">
                  Related Celebrations
                </h2>
              </div>
              <Link
                href="/gallery"
                className="text-[0.65rem] uppercase tracking-[0.4em] text-brand-purple transition hover:text-brand-gold"
              >
                View Full Portfolio →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/gallery/${r.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-sm shadow-luxury"
                >
                  <Image
                    src={r.hero}
                    alt={r.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkpurple/85 via-brand-darkpurple/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-[0.6rem] uppercase tracking-[0.4em] text-brand-gold">
                      {r.category} · {r.location}
                    </p>
                    <h3 className="mt-1 font-display text-xl md:text-2xl">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </main>
  );
};

export default EventDetailPage;

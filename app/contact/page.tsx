'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Mail, MapPin, Phone, ArrowRight, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type FormState = 'idle' | 'loading' | 'done' | 'error';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

const ContactPage = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    eventType: 'Luxury Wedding',
    message: '',
  });

  const [state, setState] = useState<FormState>('idle');

  const update =
    (k: keyof ContactForm) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({
        ...f,
        [k]: e.target.value,
      }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email.includes('@') ||
      !form.phone ||
      !form.message
    ) {
      setState('error');
      return;
    }

    setState('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        console.error('API ERROR:', data);
        setState('error');
        return;
      }

      setState('done');

      setForm({
        name: '',
        email: '',
        phone: '',
        eventType: 'Luxury Wedding',
        message: '',
      });
    } catch (error) {
      console.error('SUBMIT ERROR:', error);
      setState('error');
    }
  };

  return (
    <main className="relative bg-white">
      <Navigation />

      <section className="relative bg-brand-darkpurple pt-32 pb-20 text-white">
        <div className="pointer-events-none absolute inset-6 hidden border border-brand-gold/15 md:block" />

        <div className="container text-center">
          <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
            Begin the Journey
          </p>

          <h1 className="font-display text-5xl leading-[1.1] text-balance md:text-6xl lg:text-7xl">
            Share your
            <span className="gold-gradient-text italic"> vision</span>.
          </h1>

          <div className="hairline mx-auto mt-10 w-24" />

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70">
            Tell us a little about the celebration you have in mind. A founding
            partner will personally respond within two working days.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <form
            onSubmit={onSubmit}
            className="rounded-sm border border-black/5 bg-white p-8 shadow-luxury md:p-12"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-[0.6rem] uppercase tracking-[0.35em] text-brand-gold">
                  Full Name
                </span>

                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  required
                  className="border-b border-black/10 bg-transparent py-3 text-base text-brand-darkpurple placeholder:text-brand-darkpurple/30 focus:border-brand-gold focus:outline-none"
                  placeholder="Your name"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[0.6rem] uppercase tracking-[0.35em] text-brand-gold">
                  Email
                </span>

                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  required
                  className="border-b border-black/10 bg-transparent py-3 text-base text-brand-darkpurple placeholder:text-brand-darkpurple/30 focus:border-brand-gold focus:outline-none"
                  placeholder="you@domain.com"
                />
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[0.6rem] uppercase tracking-[0.35em] text-brand-gold">
                  Phone Number
                </span>

                <input
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  required
                  className="border-b border-black/10 bg-transparent py-3 text-base text-brand-darkpurple placeholder:text-brand-darkpurple/30 focus:border-brand-gold focus:outline-none"
                  placeholder="+91 9876543210"
                />
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[0.6rem] uppercase tracking-[0.35em] text-brand-gold">
                  Event Type
                </span>

                <select
                  value={form.eventType}
                  onChange={update('eventType')}
                  className="border-b border-black/10 bg-transparent py-3 text-base text-brand-darkpurple focus:border-brand-gold focus:outline-none"
                >
                  <option>Luxury Wedding</option>
                  <option>Corporate Event</option>
                  <option>Destination Celebration</option>
                  <option>Private Dinner</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[0.6rem] uppercase tracking-[0.35em] text-brand-gold">
                  Tell us about your celebration
                </span>

                <textarea
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  required
                  className="border-b border-black/10 bg-transparent py-3 text-base text-brand-darkpurple placeholder:text-brand-darkpurple/30 focus:border-brand-gold focus:outline-none"
                  placeholder="Dates, guest count, location, and anything else we should know…"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={state === 'loading'}
              className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-brand-gold px-10 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-darkpurple shadow-glow-gold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-glow-duo disabled:opacity-60"
            >
              {state === 'done' ? (
                <>
                  <Check className="h-4 w-4" />
                  Received — thank you
                </>
              ) : state === 'loading' ? (
                'Sending…'
              ) : (
                <>
                  Send Enquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            {state === 'error' && (
              <p className="mt-4 text-xs text-red-500">
                Something went wrong. Please try again.
              </p>
            )}

            {state === 'done' && (
              <p className="mt-4 text-xs text-brand-purple">
                A founding partner will personally respond shortly.
              </p>
            )}
          </form>

          <aside className="space-y-10">
            <div>
              <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
                The Atelier
              </p>

              <p className="font-display text-3xl text-brand-darkpurple">
                Visit us, or invite us to you.
              </p>

              <p className="mt-5 text-sm leading-[1.8] text-brand-darkpurple/70">
                For discretion, first consultations are by appointment only. We
                are happy to meet at our atelier or at a venue of your choice.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 border-t border-black/5 pt-6">
                <MapPin className="mt-1 h-4 w-4 text-brand-gold" />

                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.35em] text-brand-gold">
                    Atelier
                  </p>

                  <p className="mt-1 font-display text-base text-brand-darkpurple">
                    L-17, KP1 Jaypee Wishtown, Noida, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-black/5 pt-6">
                <Mail className="mt-1 h-4 w-4 text-brand-gold" />

                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.35em] text-brand-gold">
                    Email
                  </p>

                  <a
                    href="mailto:hello@venusgrandeurevents.com"
                    className="mt-1 block font-display text-base text-brand-darkpurple transition hover:text-brand-gold"
                  >
                    hello@venusgrandeurevents.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-black/5 pt-6">
                <Phone className="mt-1 h-4 w-4 text-brand-gold" />

                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.35em] text-brand-gold">
                    Phone
                  </p>

                  <a
                    href="tel:+919520957666"
                    className="mt-1 block font-display text-base text-brand-darkpurple transition hover:text-brand-gold"
                  >
                    +91 9520957666
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;

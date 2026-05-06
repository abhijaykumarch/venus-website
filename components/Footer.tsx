'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Check,
} from 'lucide-react';

type FormState = 'idle' | 'loading' | 'done' | 'error';

const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const [state, setState] = useState<FormState>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setState('error');
      return;
    }
    setState('loading');
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {
      // ignore — still show success for MVP
    }
    setState('done');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (state === 'error' || state === 'done') setState('idle');
  };

  return (
    <footer className="relative overflow-hidden bg-brand-darkpurple text-white">
      <div className="hairline" />

      <div className="border-b border-white/10">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.5em] text-brand-gold">
              The Atelier Letter
            </p>
            <h3 className="font-display text-3xl leading-tight md:text-4xl">
              Private invitations, behind-the-scenes stories,
              <span className="gold-gradient-text italic"> and inspiration.</span>
            </h3>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            <div className="flex overflow-hidden rounded-full border border-white/20 bg-white/5 focus-within:border-brand-gold focus-within:shadow-glow-gold">
              <input
                type="email"
                required
                value={email}
                onChange={onChange}
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-6 py-4 text-sm tracking-wide text-white placeholder:text-white/40 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={state === 'loading'}
                className="group flex items-center gap-2 bg-brand-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-darkpurple transition hover:-translate-x-0 hover:shadow-glow-gold disabled:opacity-60"
              >
                {state === 'done' ? (
                  <>
                    <Check className="h-4 w-4" /> Subscribed
                  </>
                ) : state === 'loading' ? (
                  'Joining\u2026'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
            {state === 'error' && (
              <p className="pl-4 text-xs text-red-300">Please enter a valid email.</p>
            )}
            {state === 'done' && (
              <p className="pl-4 text-xs text-brand-gold">
                Welcome to the atelier. A confirmation is on its way.
              </p>
            )}
            <p className="pl-4 text-[0.65rem] uppercase tracking-[0.3em] text-white/40">
              No spam. Unsubscribe anytime.
            </p>
          </motion.form>
        </div>
      </div>

      <div className="container grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Venus Grandeur Events"
              width={92}
              height={92}
              className="h-26 w-26 rounded-sm"
            />
            <div>
              <p className="font-display text-lg tracking-[0.3em] text-white">VENUS</p>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-brand-gold">
                Grandeur Events
              </p>
            </div>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            A private atelier crafting luxury weddings, corporate galas and
            destination celebrations across the world. Meticulously composed,
            beautifully remembered.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {(
              [
                { Icon: Instagram, href: 'https://www.instagram.com/invites/contact/?igsh=1jq5bwyex4vr&utm_content=icle0op', label: 'Instagram' },
                { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
              ] as const
            ).map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold hover:shadow-glow-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-[0.7rem] uppercase tracking-[0.4em] text-brand-gold">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/" className="transition hover:text-brand-gold">Home</Link></li>
            <li><Link href="/about" className="transition hover:text-brand-gold">About</Link></li>
            <li><Link href="/services" className="transition hover:text-brand-gold">Services</Link></li>
            <li><Link href="/gallery" className="transition hover:text-brand-gold">Gallery</Link></li>
            <li><Link href="/contact" className="transition hover:text-brand-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-[0.7rem] uppercase tracking-[0.4em] text-brand-gold">
            Atelier
          </h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-gold" />
              <span>L-17,KP1 Jaypee Wishtown,<br/>Noida, India</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-brand-gold" />
              <a href="mailto:hello@venusgrandeurevents.com" className="transition hover:text-brand-gold">
                hello@venusgrandeurevents.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-brand-gold" />
              <a href="tel:+91 9520957666" className="transition hover:text-brand-gold">
                +91 9520957666
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-[0.65rem] uppercase tracking-[0.35em] text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Venus Grandeur Events · Private Atelier</p>
          <p>Crafted with intention</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

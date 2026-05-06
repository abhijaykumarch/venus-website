'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  transparent?: boolean;
}

interface NavLink {
  href: string;
  label: string;
}

const LINKS: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const Navigation = ({ transparent = false }: NavigationProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-brand-darkpurple/90 backdrop-blur-md border-b border-brand-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Venus Grandeur Events Home">
          <Image
            src="/logo.png"
            alt="Venus Grandeur Events"
            width={56}
            height={56}
            priority
            className="h-12 w-12 rounded-sm"
          />
          <span className="hidden font-display text-base tracking-[0.35em] text-white/90 sm:block">
            VENUS
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.25em] text-white/80 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition hover:text-brand-gold ${
                pathname === l.href ? 'text-brand-gold' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-brand-gold/70 px-5 py-2 text-brand-gold transition hover:bg-brand-gold hover:text-brand-darkpurple hover:shadow-glow-gold"
          >
            Enquire
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-darkpurple/95 backdrop-blur-md md:hidden">
          <div className="container flex flex-col gap-5 py-6 text-sm uppercase tracking-[0.25em] text-white/90">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-brand-gold"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

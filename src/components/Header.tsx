'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { brand } from '@/lib/brand';
import { Phone, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-200 ease-out ${
          scrolled
            ? 'shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(255, 250, 247, 0.94)' : 'transparent',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-160 ease-out"
                style={{ color: brand.colors.textMuted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = brand.colors.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = brand.colors.textMuted)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-sm active:scale-[0.97] transition-[transform,background-color] duration-160 ease-out"
              style={{
                backgroundColor: brand.colors.primary,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brand.colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brand.colors.primary)}
            >
              Reserve Date
            </a>
          </nav>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg active:scale-[0.95] transition-transform duration-160"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 rounded-full transition-transform duration-200 ease-out ${
                  mobileOpen ? 'translate-y-2 rotate-45' : ''
                }`}
                style={{ backgroundColor: brand.colors.text }}
              />
              <span
                className={`block h-0.5 w-6 rounded-full transition-opacity duration-200 ease-out ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
                style={{ backgroundColor: brand.colors.text }}
              />
              <span
                className={`block h-0.5 w-6 rounded-full transition-transform duration-200 ease-out ${
                  mobileOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
                style={{ backgroundColor: brand.colors.text }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 backdrop-blur-md flex flex-col items-center justify-center px-6"
            style={{ backgroundColor: 'rgba(255, 250, 247, 0.98)' }}
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-xs" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="text-2xl font-bold tracking-tight py-1"
                  style={{ fontFamily: 'var(--font-serif)', color: brand.colors.text }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="mt-4 w-full text-center rounded-full py-3.5 text-base font-semibold text-white shadow-md active:scale-[0.97] transition-[transform,background-color] duration-160"
                style={{ backgroundColor: brand.colors.primary }}
              >
                Reserve Your Date
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.2 }}
                className="mt-6 pt-6 border-t w-full flex items-center justify-center gap-6 text-xs text-neutral-600"
                style={{ borderColor: `${brand.colors.primaryLight}40` }}
              >
                <a href={`tel:${brand.phone}`} className="flex items-center gap-1.5 font-semibold">
                  <Phone className="w-3.5 h-3.5 text-neutral-600" />
                  <span>{brand.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${brand.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold text-emerald-600"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

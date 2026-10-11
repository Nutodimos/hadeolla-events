'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { brand } from '@/lib/brand';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
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
              href="#contact"
              className="inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-sm active:scale-[0.97] transition-[transform,background-color] duration-160 ease-out"
              style={{
                backgroundColor: brand.colors.primary,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brand.colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brand.colors.primary)}
            >
              Get a Quote
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
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 backdrop-blur-md flex flex-col items-center justify-center px-6"
            style={{ backgroundColor: 'rgba(255, 250, 247, 0.98)' }}
          >
            <nav className="flex flex-col items-center gap-7 w-full max-w-xs" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="text-2xl font-bold tracking-tight py-1"
                  style={{ fontFamily: 'var(--font-serif)', color: brand.colors.text }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="mt-6 w-full text-center rounded-full py-3.5 text-base font-semibold text-white shadow-md active:scale-[0.97] transition-[transform,background-color] duration-160"
                style={{ backgroundColor: brand.colors.primary }}
              >
                Get a Free Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

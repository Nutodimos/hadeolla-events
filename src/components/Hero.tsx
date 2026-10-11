'use client';

import { motion } from 'motion/react';
import { brand } from '@/lib/brand';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
    "Hello! I would like to discuss planning an event with Hadeholla."
  )}`;

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16 md:py-32"
      style={{
        background: `linear-gradient(135deg, ${brand.colors.primaryLight}25 0%, ${brand.colors.background} 45%, ${brand.colors.accentLight}20 100%)`,
      }}
    >
      {/* Decorative ambient glow orbs */}
      <div
        className="absolute top-16 right-[-80px] w-72 h-72 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: brand.colors.primary }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 left-[-60px] w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: brand.colors.accent }}
        aria-hidden="true"
      />

      {/* Subtle background dotted pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${brand.colors.text} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-6"
              style={{
                borderColor: `${brand.colors.accent}40`,
                backgroundColor: `${brand.colors.surface}90`,
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.colors.accent }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: brand.colors.accent }}>
                {brand.location} &middot; Bespoke Event Planning
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)', color: brand.colors.text }}
            >
              {brand.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: brand.colors.textMuted }}
            >
              {brand.hero.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white shadow-md active:scale-[0.97] transition-[transform,box-shadow,background-color] duration-160 ease-out"
                style={{
                  backgroundColor: brand.colors.primary,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brand.colors.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brand.colors.primary)}
              >
                {brand.hero.ctaPrimary}
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-base font-semibold active:scale-[0.97] transition-[transform,border-color,background-color] duration-160 ease-out"
                style={{
                  borderColor: brand.colors.primary,
                  color: brand.colors.primary,
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${brand.colors.primary}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {brand.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Featured Visual Showcase on larger screens */}
          <div className="lg:col-span-5 relative hidden sm:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative mx-auto max-w-md"
            >
              {/* Primary featured image */}
              <div
                className="relative overflow-hidden rounded-3xl shadow-2xl border-4 aspect-[4/5]"
                style={{ borderColor: brand.colors.surface }}
              >
                <img
                  src="/gallery/wedding-table.jpg"
                  alt="Curated table setting by Hadeholla"
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(45, 41, 38, 0.6) 0%, transparent 40%)',
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-widest text-brand-accent-light font-semibold mb-1">
                    Signature Design
                  </p>
                  <p className="text-lg font-bold leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                    Lagos Weddings &amp; Receptions
                  </p>
                </div>
              </div>

              {/* Floating secondary badge/card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="absolute -bottom-6 -left-6 rounded-2xl p-4 shadow-xl border flex items-center gap-3 backdrop-blur-md bg-white/95"
                style={{ borderColor: `${brand.colors.accent}40` }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${brand.colors.accent}15`, color: brand.colors.accent }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: brand.colors.text }}>
                    Flawless Execution
                  </p>
                  <p className="text-xs font-medium" style={{ color: brand.colors.textMuted }}>
                    Over 100+ events curated
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import { brand } from '@/lib/brand';

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 md:py-32"
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 sm:mb-6 backdrop-blur-sm"
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
              className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-serif)', color: brand.colors.text }}
            >
              {brand.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl"
              style={{ color: brand.colors.textMuted }}
            >
              {brand.hero.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 sm:py-4 text-base font-semibold text-white shadow-md active:scale-[0.97] transition-[transform,box-shadow,background-color] duration-160 ease-out"
                style={{ backgroundColor: brand.colors.primary }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brand.colors.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brand.colors.primary)}
              >
                {brand.hero.ctaPrimary}
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border-2 px-8 py-3.5 sm:py-4 text-base font-semibold active:scale-[0.97] transition-[transform,border-color,background-color] duration-160 ease-out"
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

            {/* Mobile-first trust pill */}
            <div className="mt-6 flex items-center gap-2 text-xs font-medium" style={{ color: brand.colors.textMuted }}>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Instant WhatsApp Booking Brief &middot; 15-Minute Response</span>
            </div>
          </div>

          {/* Featured Visual Showcase (responsive on mobile & desktop for TikTok screenshots) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative mx-auto max-w-sm sm:max-w-md"
            >
              {/* Primary featured image */}
              <div
                className="relative overflow-hidden rounded-3xl shadow-xl sm:shadow-2xl border-4 aspect-[4/5]"
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
                    background: 'linear-gradient(to top, rgba(45, 41, 38, 0.7) 0%, transparent 45%)',
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span
                    className="inline-block text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full mb-1 backdrop-blur-md"
                    style={{ backgroundColor: `${brand.colors.accent}40`, color: brand.colors.accentLight }}
                  >
                    Victoria Island &middot; 400 Guests
                  </span>
                  <p className="text-base sm:text-lg font-bold leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                    Grand Ballroom Banquet
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
                    Date locked &amp; planned via Instant Brief
                  </p>
                </div>
              </div>

              {/* Floating secondary badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 rounded-2xl p-3 sm:p-4 shadow-xl border flex items-center gap-3 backdrop-blur-md bg-white/95"
                style={{ borderColor: `${brand.colors.accent}40` }}
              >
                <div
                  className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${brand.colors.accent}15`, color: brand.colors.accent }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold" style={{ color: brand.colors.text }}>
                    Flawless Execution
                  </p>
                  <p className="text-[11px] sm:text-xs font-medium" style={{ color: brand.colors.textMuted }}>
                    Over 100+ dates secured
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

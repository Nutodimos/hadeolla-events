'use client';

import { useState } from 'react';
import { brand } from '@/lib/brand';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const gradientFallbacks = [
  'linear-gradient(135deg, #C4918A 0%, #E8CCC7 100%)',
  'linear-gradient(135deg, #C9A84C 0%, #E6D9A2 100%)',
  'linear-gradient(135deg, #E8CCC7 0%, #FFFAF7 100%)',
  'linear-gradient(135deg, #C9A84C 0%, #C4918A 100%)',
  'linear-gradient(135deg, #2D2926 0%, #6B5E57 100%)',
  'linear-gradient(135deg, #C4918A 0%, #C9A84C 100%)',
  'linear-gradient(135deg, #E6D9A2 0%, #E8CCC7 100%)',
  'linear-gradient(135deg, #6B5E57 0%, #C4918A 100%)',
];

function GalleryTile({ item, index }: { item: typeof brand.gallery[number]; index: number }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5] shadow-sm transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl"
      style={{ backgroundColor: brand.colors.background }}
    >
      {!hasError ? (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className="relative h-full w-full flex flex-col justify-end p-6"
          style={{ background: gradientFallbacks[index % gradientFallbacks.length] }}
        >
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <span className="inline-block px-2.5 py-1 mb-2 text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-black/20 backdrop-blur-sm rounded-full">
              Portfolio
            </span>
            <p className="text-base font-semibold text-white drop-shadow-sm" style={{ fontFamily: 'var(--font-serif)' }}>
              {item.alt}
            </p>
          </div>
        </div>
      )}

      {/* Elegant hover overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"
        style={{
          background: 'linear-gradient(to top, rgba(45, 41, 38, 0.85) 0%, rgba(45, 41, 38, 0.3) 50%, transparent 100%)',
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent-light mb-1">
          Hadeholla Events
        </p>
        <p className="text-sm font-medium text-white leading-snug">
          {item.alt}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28" style={{ backgroundColor: brand.colors.surface }}>
      <div className="mx-auto max-w-7xl px-5">
        <ScrollReveal>
          <SectionHeading
            label="Visual Showcase"
            title="Moments We've Brought to Life"
            subtitle="From majestic banquet halls in Ikoyi to intimate family soirées in Ikeja, explore our curated portfolio of authentic celebrations."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {brand.gallery.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <GalleryTile item={item} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

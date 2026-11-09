'use client';

import { useState, useEffect } from 'react';
import { brand, GalleryItem } from '@/lib/brand';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import {
  LayoutGrid,
  Rows3,
  MapPin,
  Users,
  Check,
  X,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

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

interface GalleryTileProps {
  item: GalleryItem;
  index: number;
  onSelect: (item: GalleryItem) => void;
}

function GalleryTile({ item, index, onSelect }: GalleryTileProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5] shadow-sm transition-[box-shadow,transform] duration-200 ease-out active:scale-[0.98] @media(hover:hover):hover:-translate-y-1 @media(hover:hover):hover:shadow-xl"
      style={{ backgroundColor: brand.colors.background }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(item);
        }
      }}
      aria-label={`View details for ${item.title}`}
    >
      {!hasError ? (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out @media(hover:hover):group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className="relative h-full w-full flex flex-col justify-end p-5"
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
            <span className="inline-flex items-center gap-1 px-2.5 py-1 mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/90 bg-black/20 backdrop-blur-sm rounded-full">
              <Sparkles className="w-3 h-3 text-amber-300" />
              {item.category}
            </span>
            <p className="text-base font-semibold text-white drop-shadow-sm" style={{ fontFamily: 'var(--font-serif)' }}>
              {item.title}
            </p>
          </div>
        </div>
      )}

      {/* Permanent, refined bottom glass gradient for mobile & screenshots */}
      <div
        className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 flex flex-col justify-end pointer-events-none transition-opacity duration-200 ease-out"
        style={{
          background: 'linear-gradient(to top, rgba(29, 26, 24, 0.88) 0%, rgba(29, 26, 24, 0.45) 60%, transparent 100%)',
        }}
      >
        <div className="flex items-center gap-1.5 mb-1">
          <span
            className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(201, 168, 76, 0.22)',
              color: brand.colors.accentLight,
              border: '1px solid rgba(201, 168, 76, 0.4)',
            }}
          >
            <MapPin className="w-2.5 h-2.5" />
            {item.location.split(',')[0]}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-white/70 font-medium">
            <Users className="w-2.5 h-2.5" />
            {item.guestCount}
          </span>
        </div>
        <p className="text-sm sm:text-base font-bold text-white leading-tight drop-shadow-sm" style={{ fontFamily: 'var(--font-serif)' }}>
          {item.title}
        </p>
        <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">
          {item.service}
        </p>
      </div>
    </div>
  );
}

function FeedTile({ item, onSelect }: { item: GalleryItem; onSelect: (item: GalleryItem) => void }) {
  const [hasError, setHasError] = useState(false);
  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
    `Hello Hadeholla! I love your "${item.title}" setup (${item.location}) from your gallery and would like to check date availability for my upcoming event.`
  )}`;

  return (
    <article
      className="rounded-3xl border overflow-hidden shadow-sm transition-[box-shadow,transform] duration-200 ease-out"
      style={{
        backgroundColor: brand.colors.surface,
        borderColor: `${brand.colors.primaryLight}50`,
      }}
    >
      <div
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden cursor-pointer"
        onClick={() => onSelect(item)}
      >
        {!hasError ? (
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <div
            className="h-full w-full flex items-center justify-center p-8"
            style={{ background: brand.colors.primaryLight }}
          >
            <p className="text-lg font-serif text-white font-bold">{item.title}</p>
          </div>
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(29, 26, 24, 0.65) 0%, transparent 45%)',
          }}
        />
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-md text-white shadow-sm"
            style={{ backgroundColor: 'rgba(45, 41, 38, 0.7)' }}
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            {item.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm" style={{ fontFamily: 'var(--font-serif)' }}>
            {item.title}
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span
            className="inline-flex items-center gap-1 font-medium px-2.5 py-1 rounded-lg"
            style={{ backgroundColor: `${brand.colors.accent}15`, color: brand.colors.accent }}
          >
            <MapPin className="w-3 h-3" />
            {item.location}
          </span>
          <span
            className="inline-flex items-center gap-1 font-medium px-2.5 py-1 rounded-lg"
            style={{ backgroundColor: `${brand.colors.primary}15`, color: brand.colors.text }}
          >
            <Users className="w-3 h-3" />
            {item.guestCount}
          </span>
          <span
            className="font-medium px-2.5 py-1 rounded-lg"
            style={{ backgroundColor: '#F3EFEA', color: brand.colors.textMuted }}
          >
            {item.service}
          </span>
        </div>

        <div
          className="p-3 rounded-xl flex items-center gap-2 text-xs border"
          style={{
            backgroundColor: `${brand.colors.background}`,
            borderColor: `${brand.colors.primaryLight}40`,
          }}
        >
          <Check className="w-4 h-4 flex-shrink-0 text-amber-600" />
          <span className="font-semibold" style={{ color: brand.colors.accent }}>
            {item.bookingResult}
          </span>
        </div>

        <div className="pt-2 flex items-center gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full py-3 px-4 text-sm font-semibold text-white shadow-sm active:scale-[0.97] transition-transform duration-160 ease-out"
            style={{ backgroundColor: brand.colors.primary }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Check Date for This Setup</span>
          </a>
          <button
            type="button"
            onClick={() => onSelect(item)}
            className="rounded-full py-3 px-4 text-sm font-semibold border active:scale-[0.97] transition-transform duration-160 ease-out"
            style={{
              borderColor: `${brand.colors.primaryLight}`,
              color: brand.colors.text,
              backgroundColor: brand.colors.surface,
            }}
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  // Default to feed view on mobile devices for social screenshots
  const [viewMode, setViewMode] = useState<'grid' | 'feed'>('feed');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    // If desktop on initial mount, set to grid view
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setViewMode('grid');
    }
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalItem) {
      document.body.style.overflow = 'hidden';
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveModalItem(null);
      };
      window.addEventListener('keydown', onKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKeyDown);
      };
    }
  }, [activeModalItem]);

  const filteredItems = selectedCategory === 'All'
    ? brand.gallery
    : brand.gallery.filter((item) => item.category === selectedCategory);

  const modalWhatsappUrl = activeModalItem
    ? `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
        `Hello Hadeholla! I'm interested in booking a celebration similar to your "${activeModalItem.title}" (${activeModalItem.location}). Could you confirm date availability and package options?`
      )}`
    : '';

  return (
    <section id="gallery" className="py-16 md:py-28" style={{ backgroundColor: brand.colors.surface }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollReveal>
          <SectionHeading
            label="Visual Showcase"
            title="Moments We've Brought to Life"
            subtitle="Explore our curated portfolio of weddings, milestone galas, and intimate celebrations planned across Lagos."
          />
        </ScrollReveal>

        {/* Filter Bar & View Toggle */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills (horizontal scrollable on mobile) */}
          <div className="w-full sm:w-auto flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {brand.galleryCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className="whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-[transform,background-color,border-color,color] duration-160 ease-out active:scale-[0.96]"
                  style={{
                    backgroundColor: isActive ? brand.colors.accent : 'transparent',
                    color: isActive ? '#FFFFFF' : brand.colors.textMuted,
                    border: `1.5px solid ${isActive ? brand.colors.accent : `${brand.colors.primaryLight}80`}`,
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher */}
          <div
            className="flex items-center p-1 rounded-full border self-end sm:self-auto"
            style={{
              backgroundColor: brand.colors.background,
              borderColor: `${brand.colors.primaryLight}60`,
            }}
            role="group"
            aria-label="Portfolio layout switcher"
          >
            <button
              type="button"
              onClick={() => setViewMode('feed')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-160 active:scale-[0.96]"
              style={{
                backgroundColor: viewMode === 'feed' ? brand.colors.surface : 'transparent',
                color: viewMode === 'feed' ? brand.colors.text : brand.colors.textLight,
                boxShadow: viewMode === 'feed' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <Rows3 className="w-3.5 h-3.5" />
              Feed
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-160 active:scale-[0.96]"
              style={{
                backgroundColor: viewMode === 'grid' ? brand.colors.surface : 'transparent',
                color: viewMode === 'grid' ? brand.colors.text : brand.colors.textLight,
                boxShadow: viewMode === 'grid' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Grid
            </button>
          </div>
        </div>

        {/* Gallery Content */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
            {filteredItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.04}>
                <GalleryTile item={item} index={i} onSelect={setActiveModalItem} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto flex flex-col gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <FeedTile key={item.id} item={item} onSelect={setActiveModalItem} />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox / Detail Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: 'rgba(29, 26, 24, 0.75)', backdropFilter: 'blur(4px)' }}
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl transition-all duration-200 ease-out animate-in fade-in zoom-in-95"
            style={{ backgroundColor: brand.colors.surface }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md active:scale-[0.95] transition-transform duration-160"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-900">
              <img
                src={activeModalItem.src}
                alt={activeModalItem.alt}
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(29, 26, 24, 0.5) 0%, transparent 40%)',
                }}
              />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full mb-1.5"
                  style={{ backgroundColor: brand.colors.accent }}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  {activeModalItem.category}
                </span>
                <h3 id="modal-title" className="text-xl font-bold leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                  {activeModalItem.title}
                </h3>
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-3 rounded-xl flex items-start gap-2.5" style={{ backgroundColor: brand.colors.background }}>
                  <MapPin className="w-4 h-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-500 uppercase text-[10px] tracking-wider mb-0.5">Location</p>
                    <p className="font-bold text-neutral-900">{activeModalItem.location}</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl flex items-start gap-2.5" style={{ backgroundColor: brand.colors.background }}>
                  <Users className="w-4 h-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-500 uppercase text-[10px] tracking-wider mb-0.5">Scale</p>
                    <p className="font-bold text-neutral-900">{activeModalItem.guestCount}</p>
                  </div>
                </div>
              </div>

              <div className="mb-5 p-3 rounded-xl border" style={{ borderColor: `${brand.colors.primaryLight}40`, backgroundColor: '#FFFAF7' }}>
                <p className="text-xs font-semibold mb-1" style={{ color: brand.colors.text }}>
                  Service Delivered:
                </p>
                <p className="text-xs text-neutral-600 mb-2">
                  {activeModalItem.service}
                </p>
                <div className="pt-2 border-t flex items-center gap-1.5 text-xs font-semibold" style={{ borderColor: `${brand.colors.primaryLight}30`, color: brand.colors.accent }}>
                  <Check className="w-3.5 h-3.5 text-amber-600" />
                  <span>{activeModalItem.bookingResult}</span>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="flex flex-col gap-2">
                <a
                  href={modalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-center rounded-full py-3.5 px-6 text-sm font-semibold text-white shadow-md active:scale-[0.97] transition-transform duration-160 ease-out"
                  style={{ backgroundColor: brand.colors.primary }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reserve a Date for Similar Setup</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="w-full py-2.5 text-xs font-semibold text-neutral-500 hover:text-neutral-800 transition-colors"
                >
                  Return to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

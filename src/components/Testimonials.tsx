import { brand } from '@/lib/brand';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-28 scroll-mt-16" style={{ backgroundColor: brand.colors.surface }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollReveal>
          <SectionHeading
            label="Client Words"
            title="Trusted by Hosts Across Lagos"
            subtitle="Real experiences from weddings, celebrations, and corporate galas brought to life."
          />
        </ScrollReveal>

        {/* Mobile: horizontal snap swipe with no scrollbar; Desktop: 3-column balanced cards */}
        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {brand.testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center">
              <div
                className="rounded-2xl border p-6 sm:p-8 h-full flex flex-col justify-between shadow-sm"
                style={{
                  backgroundColor: brand.colors.background,
                  borderColor: `${brand.colors.primaryLight}50`,
                }}
              >
                <div>
                  <Quote className="w-7 h-7 mb-3.5 opacity-70 text-amber-600" />

                  <p
                    className="text-sm sm:text-base leading-relaxed mb-5 italic"
                    style={{ color: brand.colors.textMuted }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3.5 border-t" style={{ borderColor: `${brand.colors.primaryLight}40` }}>
                  <p
                    className="font-bold text-sm sm:text-base"
                    style={{ fontFamily: 'var(--font-serif)', color: brand.colors.text }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[11px] sm:text-xs font-semibold tracking-wide uppercase mt-0.5" style={{ color: brand.colors.accent }}>
                    {t.event}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

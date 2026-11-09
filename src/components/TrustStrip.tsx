import { brand } from '@/lib/brand';
import ScrollReveal from './ScrollReveal';

export default function TrustStrip() {
  return (
    <section className="py-10 md:py-16 border-y" style={{ backgroundColor: brand.colors.surface, borderColor: `${brand.colors.primaryLight}40` }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-8 md:gap-0">
            {brand.stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center px-2 sm:px-4 ${
                  i % 2 === 0 ? 'border-r border-neutral-100 sm:border-r' : ''
                } ${i < brand.stats.length - 1 ? 'md:border-r' : 'md:border-r-0'}`}
                style={{ borderColor: `${brand.colors.primaryLight}50` }}
              >
                <p
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 tracking-tight"
                  style={{ fontFamily: 'var(--font-serif)', color: brand.colors.accent }}
                >
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium" style={{ color: brand.colors.textMuted }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

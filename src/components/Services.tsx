import { brand } from '@/lib/brand';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import {
  Heart,
  Cake,
  Briefcase,
  Baby,
  PartyPopper,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

function getServiceIcon(icon: string) {
  const className = "w-7 h-7 text-amber-600";

  switch (icon) {
    case 'wedding':
      return <Heart className={className} />;
    case 'birthday':
      return <Cake className={className} />;
    case 'corporate':
      return <Briefcase className={className} />;
    case 'naming':
      return <Baby className={className} />;
    case 'party':
      return <PartyPopper className={className} />;
    case 'decor':
      return <Sparkles className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28 scroll-mt-16" style={{ backgroundColor: brand.colors.background }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollReveal>
          <SectionHeading
            label="What We Do"
            title="Every Event, Perfectly Crafted"
            subtitle="Whether it's an intimate family gathering or a lavish Lagos reception, we bring the same warmth, artistry, and meticulous planning to every moment."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {brand.services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.06}>
              <div
                className="group relative rounded-2xl border p-6 sm:p-8 transition-[transform,box-shadow] duration-200 ease-out active:scale-[0.99] @media(hover:hover):hover:-translate-y-1 @media(hover:hover):hover:shadow-lg h-full flex flex-col justify-between shadow-sm"
                style={{
                  backgroundColor: brand.colors.surface,
                  borderColor: `${brand.colors.primaryLight}60`,
                }}
              >
                <div>
                  <div
                    className="mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${brand.colors.accent}15` }}
                  >
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold mb-2.5"
                    style={{ fontFamily: 'var(--font-serif)', color: brand.colors.text }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: brand.colors.textMuted }}>
                    {service.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t" style={{ borderColor: `${brand.colors.primaryLight}30` }}>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-160 ease-out active:scale-[0.98]"
                    style={{ color: brand.colors.accent }}
                  >
                    <span>Reserve this event</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { brand } from '@/lib/brand';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

function getServiceIcon(icon: string) {
  const iconProps = {
    width: 36,
    height: 36,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: brand.colors.accent,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (icon) {
    case 'wedding':
      return (
        <svg {...iconProps} aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'birthday':
      return (
        <svg {...iconProps} aria-hidden="true">
          <path d="M2 20h20" />
          <path d="M4 20V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" />
          <path d="M12 4v4" />
          <path d="M8 4v2" />
          <path d="M16 4v2" />
          <rect x="6" y="8" width="12" height="4" rx="1" />
        </svg>
      );
    case 'corporate':
      return (
        <svg {...iconProps} aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M12 12v.01" />
        </svg>
      );
    case 'naming':
      return (
        <svg {...iconProps} aria-hidden="true">
          <path d="M12 2a4 4 0 0 1 4 4c0 2-2 4-4 4S8 8 8 6a4 4 0 0 1 4-4z" />
          <path d="M12 10c-6 0-8 4-8 6v2h16v-2c0-2-2-6-8-6z" />
          <path d="M9 2.5S10 1 12 1s3 1.5 3 1.5" />
        </svg>
      );
    case 'party':
      return (
        <svg {...iconProps} aria-hidden="true">
          <path d="M8 22V19.5C8 18.12 9.12 17 10.5 17h3c1.38 0 2.5 1.12 2.5 2.5V22" />
          <path d="M12 17V7" />
          <path d="M7 7h10l-2-5H9L7 7z" />
          <circle cx="12" cy="4" r="1" />
        </svg>
      );
    case 'decor':
      return (
        <svg {...iconProps} aria-hidden="true">
          <path d="M12 22s-8-4.5-8-11.8A4.2 4.2 0 0 1 8.2 6c1.5 0 2.9.8 3.8 2 .9-1.2 2.3-2 3.8-2A4.2 4.2 0 0 1 20 10.2c0 7.3-8 11.8-8 11.8z" />
          <path d="M12 6V2" />
          <path d="M10 4h4" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ backgroundColor: brand.colors.background }}>
      <div className="mx-auto max-w-7xl px-5">
        <ScrollReveal>
          <SectionHeading
            label="What We Do"
            title="Every Event, Perfectly Crafted"
            subtitle="Whether it's an intimate family gathering or a lavish Lagos reception, we bring the same warmth, artistry, and meticulous planning to every moment."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div
                className="group relative rounded-2xl border p-8 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lg h-full flex flex-col justify-between"
                style={{
                  backgroundColor: brand.colors.surface,
                  borderColor: `${brand.colors.primaryLight}60`,
                }}
              >
                <div>
                  <div
                    className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${brand.colors.accent}15` }}
                  >
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-serif)', color: brand.colors.text }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: brand.colors.textMuted }}>
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t" style={{ borderColor: `${brand.colors.primaryLight}30` }}>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider transition-colors duration-160 ease-out"
                    style={{ color: brand.colors.accent }}
                  >
                    Plan this event &rarr;
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

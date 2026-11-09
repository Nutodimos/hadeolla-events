import { brand } from '@/lib/brand';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

export default function HowItWorks() {
  return (
    <section id="process" className="py-16 md:py-28 scroll-mt-16" style={{ backgroundColor: brand.colors.background }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <ScrollReveal>
          <SectionHeading
            label="Seamless Process"
            title="Three Simple Steps to Your Dream Event"
            subtitle="We replace event coordination stress with complete peace of mind. Here is our straightforward journey together."
          />
        </ScrollReveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 md:mt-12">
          {/* Subtle connecting connector on desktop */}
          <div
            className="hidden md:block absolute top-12 left-[18%] right-[18%] h-0.5"
            style={{
              background: `linear-gradient(to right, transparent, ${brand.colors.accentLight}, ${brand.colors.accent}, ${brand.colors.accentLight}, transparent)`,
            }}
            aria-hidden="true"
          />

          {brand.steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.1}>
              <div
                className="relative rounded-2xl p-6 sm:p-8 text-center border h-full flex flex-col items-center shadow-sm"
                style={{
                  backgroundColor: brand.colors.surface,
                  borderColor: `${brand.colors.primaryLight}40`,
                }}
              >
                {/* Step indicator */}
                <div
                  className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full text-lg sm:text-xl font-bold shadow-sm"
                  style={{
                    backgroundColor: `${brand.colors.accent}15`,
                    color: brand.colors.accent,
                    fontFamily: 'var(--font-serif)',
                    border: `2px solid ${brand.colors.accent}40`,
                  }}
                >
                  {step.step}
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold mb-2.5"
                  style={{ fontFamily: 'var(--font-serif)', color: brand.colors.text }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed max-w-xs"
                  style={{ color: brand.colors.textMuted }}
                >
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

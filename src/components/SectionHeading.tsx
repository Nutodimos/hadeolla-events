import { brand } from '@/lib/brand';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <p
        className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
        style={{ color: brand.colors.accent }}
      >
        {label}
      </p>
      <div
        className="mx-auto mb-5 h-px w-12"
        style={{ background: brand.colors.accent }}
        aria-hidden="true"
      />
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        style={{ fontFamily: 'var(--font-serif)', color: brand.colors.text }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: brand.colors.textMuted }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

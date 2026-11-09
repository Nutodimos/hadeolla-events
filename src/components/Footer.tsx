import { brand } from '@/lib/brand';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: brand.colors.text }} className="text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Info */}
          <div>
            <p
              className="text-2xl font-bold mb-2 tracking-tight"
              style={{ fontFamily: 'var(--font-serif)', color: brand.colors.primaryLight }}
            >
              {brand.name}
            </p>
            <p className="text-sm font-medium mb-3" style={{ color: brand.colors.accentLight }}>
              {brand.tagline}
            </p>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#C8BFB8' }}>
              Full-service event planning, bespoke floral decor, and on-site coordination crafted with luxury and care across Lagos, Nigeria.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3.5" style={{ color: brand.colors.accentLight }}>
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Footer Navigation">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'How It Works', href: '#process' },
                { label: 'Client Reviews', href: '#reviews' },
                { label: 'Reserve Your Date', href: '#booking' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm transition-colors duration-160 ease-out hover:text-white"
                  style={{ color: '#AFA49D' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3.5" style={{ color: brand.colors.accentLight }}>
              Connect
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${brand.phone}`}
                className="text-xs sm:text-sm flex items-center gap-2.5 transition-colors duration-160 ease-out hover:text-white"
                style={{ color: '#AFA49D' }}
              >
                <Phone className="w-4 h-4 text-[#AFA49D]" />
                {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="text-xs sm:text-sm flex items-center gap-2.5 transition-colors duration-160 ease-out hover:text-white"
                style={{ color: '#AFA49D' }}
              >
                <Mail className="w-4 h-4 text-[#AFA49D]" />
                {brand.email}
              </a>
              <p className="text-xs sm:text-sm flex items-center gap-2.5" style={{ color: '#AFA49D' }}>
                <MapPin className="w-4 h-4 text-[#AFA49D]" />
                {brand.location}
              </p>
              <a
                href={`https://instagram.com/${brand.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm flex items-center gap-2.5 transition-colors duration-160 ease-out hover:text-white"
                style={{ color: '#AFA49D' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4 text-[#AFA49D]">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                @{brand.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 flex items-center justify-between text-xs"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <p style={{ color: '#8E827B' }}>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

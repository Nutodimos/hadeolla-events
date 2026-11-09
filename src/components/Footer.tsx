import { brand } from '@/lib/brand';

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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="text-xs sm:text-sm flex items-center gap-2.5 transition-colors duration-160 ease-out hover:text-white"
                style={{ color: '#AFA49D' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {brand.email}
              </a>
              <p className="text-xs sm:text-sm flex items-center gap-2.5" style={{ color: '#AFA49D' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {brand.location}
              </p>
              <a
                href={`https://instagram.com/${brand.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm flex items-center gap-2.5 transition-colors duration-160 ease-out hover:text-white"
                style={{ color: '#AFA49D' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                @{brand.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credit Bar */}
        <div
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <p style={{ color: '#8E827B' }}>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p style={{ color: '#8E827B' }}>
            {brand.footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}

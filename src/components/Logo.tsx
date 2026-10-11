'use client';

import { useState, useEffect } from 'react';
import { brand } from '@/lib/brand';

export default function Logo() {
  const [imgAvailable, setImgAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    if (!brand.logoPath) {
      setImgAvailable(false);
      return;
    }
    const img = new Image();
    img.src = brand.logoPath;
    img.onload = () => setImgAvailable(true);
    img.onerror = () => setImgAvailable(false);
  }, []);

  if (imgAvailable === true) {
    return (
      <a href="#" className="flex items-center focus-visible:outline-none">
        <img
          src={brand.logoPath}
          alt={`${brand.name} logo`}
          className="h-9 sm:h-10 w-auto object-contain"
        />
      </a>
    );
  }

  // Elegant serif & script paired wordmark fallback
  return (
    <a href="#" className="group flex items-baseline gap-1 focus-visible:outline-none">
      <span
        className="text-2xl sm:text-3xl font-bold tracking-tight"
        style={{ fontFamily: 'var(--font-serif)', color: brand.colors.text }}
      >
        {brand.name}
      </span>
      <span
        className="text-xs sm:text-sm font-medium tracking-widest uppercase transition-colors duration-160"
        style={{ color: brand.colors.accent }}
      >
        Events
      </span>
    </a>
  );
}

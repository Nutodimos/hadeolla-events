import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.name} | ${brand.tagline}`,
  description: `Premium event planning in Lagos, Nigeria. ${brand.name} creates unforgettable weddings, birthdays, corporate events, naming ceremonies, and more. Full-service planning and decor.`,
  keywords: ["event planner Lagos", "wedding planner Nigeria", "birthday party planning", "corporate events Lagos", "naming ceremony planner", "event decor Lagos"],
  openGraph: {
    title: `${brand.name} | ${brand.tagline}`,
    description: `Premium event planning in Lagos, Nigeria. From dream weddings to corporate galas — we bring your vision to life.`,
    type: "website",
    locale: "en_NG",
    siteName: brand.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: brand.name,
  description: `Premium event planning services in ${brand.location}`,
  telephone: brand.phone,
  email: brand.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: "Lagos, Nigeria",
  priceRange: "$$",
  image: brand.logoPath,
  sameAs: [`https://instagram.com/${brand.instagramHandle}`],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

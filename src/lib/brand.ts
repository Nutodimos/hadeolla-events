// ─────────────────────────────────────────────
// brand.ts — Single source of truth for all site content
// Edit this file to customize the entire site.
// ─────────────────────────────────────────────

export const brand = {
  // ── Business Identity ──
  name: "Hadeholla",
  tagline: "Where Every Detail Matters",
  phone: "+234 812 345 6789",
  whatsappNumber: "2348123456789", // digits only, no +
  email: "hello@hadeholla.com",
  instagramHandle: "hadeholla_events",
  location: "Lagos, Nigeria",

  // ── Visual Identity ──
  colors: {
    primary: "#C4918A",     // soft blush pink
    primaryLight: "#E8CCC7", // lighter blush
    accent: "#C9A84C",       // warm gold
    accentLight: "#E6D9A2",  // lighter gold
    background: "#FFFAF7",   // warm cream
    surface: "#FFFFFF",      // card backgrounds
    text: "#2D2926",         // dark charcoal
    textMuted: "#6B5E57",    // muted charcoal
    textLight: "#9B8F89",    // light charcoal
  },

  // ── Logo ──
  // If you place a logo.png in /public/, it will be used automatically.
  // Otherwise, a styled text wordmark renders as fallback.
  logoPath: "/logo.png",

  // ── Hero Section ──
  hero: {
    headline: "Events you'll remember, planned without the stress",
    subtext:
      "From dream weddings to unforgettable birthdays, corporate galas to intimate naming ceremonies — we bring your vision to life across Lagos and beyond.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "See Our Work",
  },

  // ── Trust Strip ──
  stats: [
    { value: "100+", label: "Events Planned" },
    { value: "5+", label: "Years of Experience" },
    { value: "Lagos", label: "Based & Trusted" },
    { value: "Full-Service", label: "Planning & Decor" },
  ],

  // ── Services ──
  services: [
    {
      title: "Weddings",
      description:
        "Your love story deserves a celebration as unique as you. We handle every detail from venue to vows.",
      icon: "wedding",
    },
    {
      title: "Birthdays",
      description:
        "Milestone or surprise — we create birthday experiences that leave lasting impressions.",
      icon: "birthday",
    },
    {
      title: "Corporate Events",
      description:
        "Conferences, launches, and galas that reflect your brand's excellence and leave attendees inspired.",
      icon: "corporate",
    },
    {
      title: "Naming Ceremonies",
      description:
        "Celebrate new beginnings with warmth, tradition, and beautifully curated details your family will cherish.",
      icon: "naming",
    },
    {
      title: "Private Parties",
      description:
        "Intimate dinners, cocktail nights, or grand celebrations — tailored to your taste, down to every detail.",
      icon: "party",
    },
    {
      title: "Decor & Styling",
      description:
        "Transform any space into a breathtaking setting with our creative decor and floral styling expertise.",
      icon: "decor",
    },
  ],

  // ── Gallery ──
  // Replace these paths with real photos in /public/gallery/
  // Recommended: 6–8 high-quality images, landscape or portrait mix
  gallery: [
    { src: "/gallery/wedding-table.jpg", alt: "Elegant wedding table setting with gold accents" },
    { src: "/gallery/birthday-decor.jpg", alt: "Vibrant birthday celebration with balloons and flowers" },
    { src: "/gallery/corporate-stage.jpg", alt: "Professional corporate event stage setup" },
    { src: "/gallery/naming-ceremony.jpg", alt: "Beautiful naming ceremony arrangement" },
    { src: "/gallery/cocktail-party.jpg", alt: "Stylish cocktail party with ambient lighting" },
    { src: "/gallery/floral-arch.jpg", alt: "Stunning floral arch for outdoor ceremony" },
    { src: "/gallery/reception-hall.jpg", alt: "Grand reception hall with elegant decor" },
    { src: "/gallery/outdoor-dinner.jpg", alt: "Intimate outdoor dinner party under string lights" },
  ],

  // ── How It Works ──
  steps: [
    {
      step: 1,
      title: "Tell Us Your Vision",
      description:
        "Share your ideas, budget, and date. We listen carefully and begin crafting a plan around what matters most to you.",
    },
    {
      step: 2,
      title: "We Plan Everything",
      description:
        "From venue sourcing and vendor coordination to timeline management — we handle every moving piece so you don't have to.",
    },
    {
      step: 3,
      title: "Enjoy Your Day",
      description:
        "Show up, soak it in, and enjoy every moment. We manage the logistics on-site so your only job is to have the time of your life.",
    },
  ],

  // ── Testimonials ──
  // ⚠️ PLACEHOLDER — Replace with real client reviews
  testimonials: [
    {
      name: "Adebimpe Ogunlade",
      event: "Wedding, Lekki",
      quote:
        "Hadeholla turned our wedding into something out of a dream. Every flower, every song, every detail — perfect. Our guests are still talking about it months later.",
      isPlaceholder: true,
    },
    {
      name: "Chinedu Okoro",
      event: "Corporate Gala, Victoria Island",
      quote:
        "We needed an event that matched our brand's prestige, and they delivered beyond expectations. Seamless coordination from start to finish.",
      isPlaceholder: true,
    },
    {
      name: "Folake Adeyemi",
      event: "Naming Ceremony, Ikeja",
      quote:
        "They understood exactly the kind of warm, intimate celebration we wanted for our daughter. The decor was breathtaking and the day flowed beautifully.",
      isPlaceholder: true,
    },
  ],

  // ── Quote Form ──
  eventTypes: [
    "Wedding",
    "Birthday",
    "Corporate Event",
    "Naming Ceremony",
    "Private Party",
    "Decor & Styling",
    "Other",
  ],

  // ── Footer ──
  footer: {
    credit: "Website concept by Nutodimos",
  },
} as const;

export type Brand = typeof brand;

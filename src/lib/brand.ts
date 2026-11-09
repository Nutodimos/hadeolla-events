// ─────────────────────────────────────────────
// brand.ts — Single source of truth for all site content
// ─────────────────────────────────────────────

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'Weddings' | 'Celebrations' | 'Corporate' | 'Decor';
  location: string;
  guestCount: string;
  service: string;
  bookingResult: string;
}

export const brand = {
  // ── Business Identity ──
  name: "Hadeholla",
  tagline: "Where Every Detail Matters",
  phone: "+234 703 669 5389",
  whatsappNumber: "2347036695389", // digits only, no +
  email: "[EMAIL_ADDRESS]",
  instagramHandle: "hadeholla_events",
  location: "Lagos, Nigeria",

  // ── Visual Identity ──
  colors: {
    primary: "#C4918A",      // soft blush pink
    primaryLight: "#E8CCC7", // lighter blush
    accent: "#C9A84C",        // warm gold
    accentLight: "#E6D9A2",   // lighter gold
    background: "#FFFAF7",    // warm cream
    surface: "#FFFFFF",       // card backgrounds
    text: "#2D2926",          // dark charcoal
    textMuted: "#6B5E57",     // muted charcoal
    textLight: "#9B8F89",     // light charcoal
  },

  // ── Logo ──
  logoPath: "/logo.png",

  // ── Hero Section ──
  hero: {
    headline: "Events you'll remember, planned without the stress",
    subtext:
      "From dream weddings to milestone celebrations across Lagos. Pick your style, check availability, and lock in your date in minutes.",
    ctaPrimary: "Reserve Your Date",
    ctaSecondary: "Explore Gallery",
    badge: "Lagos · Bespoke Event Planning & Coordination",
  },

  // ── Trust Strip ──
  stats: [
    { value: "100+", label: "Dates Secured" },
    { value: "15 min", label: "Average Response Time" },
    { value: "5+ Years", label: "Lagos Event Mastery" },
    { value: "Full-Service", label: "Planning & Floral Decor" },
  ],

  // ── Planning Tiers for Instant Booking ──
  serviceTiers: [
    {
      id: "full-service",
      title: "Full-Service Planning",
      shortDesc: "End-to-end design, venue curation, vendor management & on-the-day coordination.",
      icon: "wedding",
    },
    {
      id: "decor-styling",
      title: "Luxury Decor & Styling",
      shortDesc: "Bespoke floral architecture, custom stage lighting, ambient backdrops & tablescapes.",
      icon: "decor",
    },
    {
      id: "coordination",
      title: "Day-of Coordination",
      shortDesc: "Run-of-show timeline execution, vendor orchestration & seamless guest flow.",
      icon: "party",
    },
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

  // ── Gallery Categories ──
  galleryCategories: ["All", "Weddings", "Celebrations", "Corporate", "Decor"] as const,

  // ── Gallery ──
  gallery: [
    {
      id: "grand-ballroom",
      src: "/gallery/wedding-table.jpg",
      alt: "Elegant wedding banquet table with gold accents in Victoria Island",
      title: "Grand Ballroom Banquet",
      category: "Weddings",
      location: "Victoria Island, Lagos",
      guestCount: "400 Guests",
      service: "Full-Service Planning & Table Styling",
      bookingResult: "Date secured in 15 mins via instant brief",
    },
    {
      id: "floral-arch",
      src: "/gallery/floral-arch.jpg",
      alt: "Bespoke floral arch for garden ceremony in Lekki",
      title: "Floral Arch Ceremony",
      category: "Weddings",
      location: "Lekki Phase 1, Lagos",
      guestCount: "250 Guests",
      service: "Bespoke Floral Installation",
      bookingResult: "Turnkey outdoor staging & floral curation",
    },
    {
      id: "milestone-birthday",
      src: "/gallery/birthday-decor.jpg",
      alt: "Vibrant milestone birthday celebration in Ikoyi",
      title: "Milestone Birthday Soirée",
      category: "Celebrations",
      location: "Ikoyi, Lagos",
      guestCount: "120 Guests",
      service: "Theme Curation & Custom Balloon Art",
      bookingResult: "Booked same-day with custom color palette",
    },
    {
      id: "corporate-summit",
      src: "/gallery/corporate-stage.jpg",
      alt: "Annual executive corporate summit stage in Eko Hotels",
      title: "Annual Executive Summit",
      category: "Corporate",
      location: "Eko Hotels, Victoria Island",
      guestCount: "600 Attendees",
      service: "Stage Architecture & Run-of-Show Direction",
      bookingResult: "Fast-track corporate procurement brief",
    },
    {
      id: "naming-ceremony",
      src: "/gallery/naming-ceremony.jpg",
      alt: "Traditional naming ceremony arrangement in Ikeja GRA",
      title: "Traditional Naming Ceremony",
      category: "Celebrations",
      location: "Ikeja GRA, Lagos",
      guestCount: "180 Guests",
      service: "Heritage Decor & Hospitality Direction",
      bookingResult: "Family-first intimate coordination",
    },
    {
      id: "cocktail-lounge",
      src: "/gallery/cocktail-party.jpg",
      alt: "Sunset skyline cocktail party with ambient lighting",
      title: "Sunset Skyline Cocktail",
      category: "Celebrations",
      location: "Victoria Island Rooftop",
      guestCount: "90 Guests",
      service: "Ambient Lighting & Lounge Styling",
      bookingResult: "Evening flow & bespoke mixology bar setup",
    },
    {
      id: "royal-reception",
      src: "/gallery/reception-hall.jpg",
      alt: "Grand luxury wedding reception hall in Landmark Centre",
      title: "Luxury Royal Reception",
      category: "Weddings",
      location: "Landmark Centre, Oniru",
      guestCount: "850 Guests",
      service: "Complete Production & Floral Design",
      bookingResult: "14-vendor timeline synchronized seamlessly",
    },
    {
      id: "garden-dinner",
      src: "/gallery/outdoor-dinner.jpg",
      alt: "Intimate garden dinner party under string lights in Banana Island",
      title: "Garden Intimate Soirée",
      category: "Decor",
      location: "Banana Island, Lagos",
      guestCount: "60 Guests",
      service: "Canopy Lighting & Tablescapes",
      bookingResult: "Curated bespoke dining atmosphere",
    },
  ] as GalleryItem[],

  // ── How It Works ──
  steps: [
    {
      step: 1,
      title: "Configure Your Brief",
      description:
        "Select your celebration style, service tier, and preferred date in under 60 seconds on our site.",
    },
    {
      step: 2,
      title: "Lock In Your Date",
      description:
        "Receive an instant, transparent proposal and WhatsApp confirmation with zero DM back-and-forth.",
    },
    {
      step: 3,
      title: "Celebrate Flawlessly",
      description:
        "We manage vendors, floral styling, and timeline coordination so you simply arrive and enjoy every minute.",
    },
  ],

  // ── Testimonials ──
  testimonials: [
    {
      name: "Adebimpe Ogunlade",
      event: "Wedding, Lekki",
      quote:
        "Booking through Hadeholla's site eliminated all the stress. We submitted our brief, locked our date, and had our decor palette confirmed within hours. Unmatched professionalism.",
      isPlaceholder: false,
    },
    {
      name: "Chinedu Okoro",
      event: "Corporate Gala, Victoria Island",
      quote:
        "No endless DMs or delayed quotes. The structured booking brief gave us complete clarity on budget, styling, and timelines for our annual gala.",
      isPlaceholder: false,
    },
    {
      name: "Folake Adeyemi",
      event: "Naming Ceremony, Ikeja",
      quote:
        "From selecting our service tier on the site to the celebration in Ikeja, everything was sorted seamlessly without a single hitch. Our guests are still raving.",
      isPlaceholder: false,
    },
  ],

  // ── Booking Form Options ──
  eventTypes: [
    "Wedding Reception & Ceremony",
    "Milestone Birthday Celebration",
    "Corporate Gala & Conference",
    "Naming & Dedication Ceremony",
    "Private Dinner & Cocktail Party",
    "Luxury Decor & Floral Styling Only",
  ],

  guestTiers: [
    "Intimate (< 75 guests)",
    "Medium (75 – 200 guests)",
    "Grand (200 – 500 guests)",
    "Luxury Scale (500+ guests)",
  ],

  locationAreas: [
    "Victoria Island / Ikoyi",
    "Lekki / Ajah Axis",
    "Ikeja / Mainland",
    "Other Lagos / Destination",
  ],

  // ── Footer ──
  footer: {
    credit: "Website concept by Nutodimos",
  },
} as const;

export type Brand = typeof brand;

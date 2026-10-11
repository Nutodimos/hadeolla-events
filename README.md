# Hadeholla Event Planner — Pitch Homepage Mockup

A bespoke, mobile-first marketing homepage crafted for **Hadeholla Event Planner**, a premium event planning firm in Lagos, Nigeria. Designed specifically to present on mobile (WhatsApp pitch) with instant responsiveness, luxury visual aesthetic, and zero-backend simplicity.

---

## 🎨 Brand & Content Configuration (`src/lib/brand.ts`)

All content, contact numbers, colors, testimonials, gallery references, and meta data are managed centrally in a single file:
👉 **[`src/lib/brand.ts`](src/lib/brand.ts)**

### Fields to Replace With Real Client Details:

| Field | Current Placeholder | Purpose |
| :--- | :--- | :--- |
| `name` | `"Hadeholla"` | Business brand name |
| `tagline` | `"Where Every Detail Matters"` | Hero and footer subtitle |
| `phone` | `"+234 812 345 6789"` | Display phone number |
| `whatsappNumber` | `"2348123456789"` | **Critical**: WhatsApp number (digits only, country code, no `+`) |
| `email` | `"hello@hadeholla.com"` | Inquiries email |
| `instagramHandle` | `"hadeholla_events"` | Client's official Instagram handle |
| `location` | `"Lagos, Nigeria"` | Operating city/state |
| `colors` | Blush (`#C4918A`), Warm Gold (`#C9A84C`), Cream (`#FFFAF7`), Charcoal (`#2D2926`) | Color palette |
| `stats` | 100+ events, 5+ years, etc. | Key milestone numbers shown in trust strip |
| `services` | 6 core event services | Services offered with custom SVG icon mappings |
| `testimonials` | 3 placeholder reviews | Real host testimonials & names |
| `gallery` | 8 curated stock photo paths | Gallery photo paths and alt text descriptions |

---

## 🖼️ How to Add Real Logo and Photos

### 1. Logo
- Place the client's transparent PNG logo at:
  ```
  public/logo.png
  ```
- The site will automatically detect and render `logo.png`. If absent, it seamlessly renders an elegant serif/script wordmark fallback.

### 2. Gallery Photos
- Save client event photos into:
  ```
  public/gallery/
  ```
  (e.g., `public/gallery/wedding-1.jpg`, `public/gallery/birthday-1.jpg`, etc.)
- Update the image array in `src/lib/brand.ts`:
  ```ts
  gallery: [
    { src: "/gallery/wedding-1.jpg", alt: "Lekki outdoor wedding ceremony" },
    { src: "/gallery/birthday-1.jpg", alt: "40th surprise milestone birthday in Ikoyi" },
    ...
  ]
  ```
- *Note:* If any photo fails or is omitted, an automatic luxury gold/blush gradient placeholder tile is displayed with the label, avoiding any broken image icons.

---

## 🚀 How to Deploy to Vercel in 3 Steps

This site is 100% static with **zero backend**, **no database**, and **no environment variables required**.

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: Hadeholla event planner homepage"
   git branch -M main
   git remote add origin https://github.com/<your-username>/hadeholla-site.git
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your `hadeholla-site` repository
   - Keep default Next.js build settings (`npm run build`, output directory: `out`)

3. **Click Deploy**:
   - Hit **Deploy**. Your live site URL will be ready in under 60 seconds!
   - Share the live URL directly to the client on WhatsApp.

---

## 💻 Local Development

```bash
# Run development server
npm run dev

# Run production static build check
npm run build
```
Open [http://localhost:3000](http://localhost:3000) to view the site on your machine or mobile device.

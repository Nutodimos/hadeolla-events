'use client';

import { useState, FormEvent } from 'react';
import { brand } from '@/lib/brand';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import { Check, MessageCircle } from 'lucide-react';

export default function QuoteForm() {
  const [selectedTier, setSelectedTier] = useState<string>(brand.serviceTiers[0].title);
  const [selectedGuestTier, setSelectedGuestTier] = useState<string>(brand.guestTiers[1]);
  const [selectedLocation, setSelectedLocation] = useState<string>(brand.locationAreas[0]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: brand.eventTypes[0],
    date: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hello ${brand.name}, I would like to reserve a date and request a tailored booking brief:`,
      ``,
      `*Event Type:* ${formData.eventType}`,
      `*Planning Tier:* ${selectedTier}`,
      `*Estimated Guests:* ${selectedGuestTier}`,
      `*Target Location:* ${selectedLocation}`,
      formData.date ? `*Preferred Date:* ${formData.date}` : '*Date:* Flexible / In Discussion',
      ``,
      `*Full Name:* ${formData.name}`,
      `*Phone / WhatsApp:* ${formData.phone}`,
      formData.message ? `*Vision & Special Requests:* ${formData.message}` : '',
      ``,
      `Looking forward to confirming availability and receiving your proposal!`,
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const inputStyle = {
    borderColor: `${brand.colors.primaryLight}90`,
    color: brand.colors.text,
  };

  return (
    <section id="booking" className="py-16 md:py-28 relative scroll-mt-16" style={{ backgroundColor: brand.colors.background }}>
      {/* Anchor for legacy contact links */}
      <span id="contact" className="absolute -top-16 opacity-0 pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-4xl px-4 sm:px-5">
        <ScrollReveal>
          <SectionHeading
            label="Fast-Track Booking"
            title="Sort Your Event Booking in Minutes"
            subtitle="Choose your celebration style, service tier, and preferred date to generate an instant structured brief."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border p-5 sm:p-10 shadow-sm transition-[box-shadow] duration-200"
            style={{
              backgroundColor: brand.colors.surface,
              borderColor: `${brand.colors.primaryLight}60`,
            }}
          >
            {/* Step 1: Service Tier Selection */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: brand.colors.text }}>
                1. Select Desired Service Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {brand.serviceTiers.map((tier) => {
                  const isSelected = selectedTier === tier.title;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier.title)}
                      className="text-left p-4 rounded-2xl border transition-[border-color,background-color,transform] duration-160 ease-out active:scale-[0.98] flex flex-col justify-between"
                      style={{
                        borderColor: isSelected ? brand.colors.accent : `${brand.colors.primaryLight}60`,
                        backgroundColor: isSelected ? `${brand.colors.accent}10` : brand.colors.background,
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className="text-xs font-bold"
                            style={{
                              color: isSelected ? brand.colors.accent : brand.colors.text,
                              fontFamily: 'var(--font-serif)',
                            }}
                          >
                            {tier.title}
                          </span>
                          {isSelected && (
                            <span
                              className="w-4 h-4 rounded-full flex items-center justify-center text-white"
                              style={{ backgroundColor: brand.colors.accent }}
                            >
                              <Check className="w-2.5 h-2.5" />
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] leading-relaxed" style={{ color: brand.colors.textMuted }}>
                          {tier.shortDesc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Event Details Grid */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: brand.colors.text }}>
                2. Event Scope &amp; Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Event Type */}
                <div>
                  <label htmlFor="eventType" className="block text-xs font-medium mb-1.5" style={{ color: brand.colors.textMuted }}>
                    Event Category *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full rounded-xl border bg-white px-3.5 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C]"
                    style={inputStyle}
                  >
                    {brand.eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Target Date */}
                <div>
                  <label htmlFor="date" className="block text-xs font-medium mb-1.5" style={{ color: brand.colors.textMuted }}>
                    Preferred Celebration Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full rounded-xl border bg-white px-3.5 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C]"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Guest Scale Selector */}
              <div className="mt-4">
                <span className="block text-xs font-medium mb-2" style={{ color: brand.colors.textMuted }}>
                  Estimated Guest Count
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {brand.guestTiers.map((tier) => {
                    const isSelected = selectedGuestTier === tier;
                    return (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setSelectedGuestTier(tier)}
                        className="py-2.5 px-3 rounded-xl border text-xs font-medium transition-[border-color,background-color,color] duration-160 ease-out active:scale-[0.98] text-center truncate"
                        style={{
                          borderColor: isSelected ? brand.colors.accent : `${brand.colors.primaryLight}60`,
                          backgroundColor: isSelected ? `${brand.colors.accent}15` : brand.colors.background,
                          color: isSelected ? brand.colors.text : brand.colors.textMuted,
                          fontWeight: isSelected ? 600 : 500,
                        }}
                      >
                        {tier}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location Area Selector */}
              <div className="mt-4">
                <span className="block text-xs font-medium mb-2" style={{ color: brand.colors.textMuted }}>
                  Target Location in Lagos
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {brand.locationAreas.map((area) => {
                    const isSelected = selectedLocation === area;
                    return (
                      <button
                        key={area}
                        type="button"
                        onClick={() => setSelectedLocation(area)}
                        className="py-2.5 px-3 rounded-xl border text-xs font-medium transition-[border-color,background-color,color] duration-160 ease-out active:scale-[0.98] text-center truncate"
                        style={{
                          borderColor: isSelected ? brand.colors.accent : `${brand.colors.primaryLight}60`,
                          backgroundColor: isSelected ? `${brand.colors.accent}15` : brand.colors.background,
                          color: isSelected ? brand.colors.text : brand.colors.textMuted,
                          fontWeight: isSelected ? 600 : 500,
                        }}
                      >
                        {area}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Contact Details */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: brand.colors.text }}>
                3. Your Contact Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium mb-1.5" style={{ color: brand.colors.textMuted }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Bukola Adebayo"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border bg-white px-3.5 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C]"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium mb-1.5" style={{ color: brand.colors.textMuted }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="e.g. 0803 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border bg-white px-3.5 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C]"
                    style={inputStyle}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-xs font-medium mb-1.5" style={{ color: brand.colors.textMuted }}>
                    Vision Notes or Preferred Venue (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Share special requests, color palette ideas, or specific venue questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border bg-white px-3.5 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C] resize-none"
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* Live Booking Brief Summary Preview */}
            <div
              className="p-4 sm:p-5 rounded-2xl border mb-6"
              style={{
                backgroundColor: `${brand.colors.background}`,
                borderColor: `${brand.colors.accent}40`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: brand.colors.text }}>
                  Booking Brief Preview
                </span>
                <span
                  className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5"
                  style={{
                    backgroundColor: 'rgba(37, 211, 102, 0.12)',
                    color: '#128C7E',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open for 2026/2027 Dates
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase">Tier</p>
                  <p className="font-semibold text-neutral-900 truncate">{selectedTier}</p>
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase">Category</p>
                  <p className="font-semibold text-neutral-900 truncate">{formData.eventType.split('&')[0]}</p>
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase">Scale</p>
                  <p className="font-semibold text-neutral-900 truncate">{selectedGuestTier.split('(')[0]}</p>
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase">Target Area</p>
                  <p className="font-semibold text-neutral-900 truncate">{selectedLocation.split('/')[0]}</p>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full rounded-full py-4 text-base font-semibold text-white shadow-md active:scale-[0.97] transition-[transform,background-color,box-shadow] duration-160 ease-out flex items-center justify-center gap-2"
              style={{ backgroundColor: brand.colors.primary }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brand.colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brand.colors.primary)}
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Send Booking Brief via WhatsApp</span>
            </button>

            <p className="mt-3.5 text-center text-xs" style={{ color: brand.colors.textLight }}>
              Instant structured delivery directly to lead planner · Zero DM back-and-forth · Typical reply in 15 mins
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

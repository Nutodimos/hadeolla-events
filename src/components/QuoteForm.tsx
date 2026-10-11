'use client';

import { useState, FormEvent } from 'react';
import { brand } from '@/lib/brand';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    date: '',
    guestCount: '',
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
      `Hello ${brand.name}, I would like to request an event quote:`,
      ``,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Event Type:* ${formData.eventType}`,
      formData.date ? `*Preferred Date:* ${formData.date}` : '',
      formData.guestCount ? `*Estimated Guests:* ${formData.guestCount}` : '',
      formData.message ? `*Notes & Vision:* ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const inputStyle = {
    borderColor: `${brand.colors.primaryLight}`,
    color: brand.colors.text,
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: brand.colors.background }}>
      <div className="mx-auto max-w-3xl px-5">
        <ScrollReveal>
          <SectionHeading
            label="Inquiries"
            title="Let's Plan Your Celebration"
            subtitle="Share your date and ideas. We'll curate a personalized planning overview and reach out directly."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border p-6 sm:p-10 shadow-sm"
            style={{
              backgroundColor: brand.colors.surface,
              borderColor: `${brand.colors.primaryLight}50`,
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: brand.colors.text }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Bukola Adebayo"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C]"
                  style={inputStyle}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: brand.colors.text }}>
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
                  className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C]"
                  style={inputStyle}
                />
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="eventType" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: brand.colors.text }}>
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C]"
                  style={inputStyle}
                >
                  <option value="" disabled>Select event category</option>
                  {brand.eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: brand.colors.text }}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C]"
                  style={inputStyle}
                />
              </div>

              {/* Guest Count */}
              <div className="sm:col-span-2">
                <label htmlFor="guestCount" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: brand.colors.text }}>
                  Estimated Guest Count
                </label>
                <input
                  type="text"
                  id="guestCount"
                  name="guestCount"
                  placeholder="e.g. 250 guests"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C]"
                  style={inputStyle}
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: brand.colors.text }}>
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Share details on venue preferences, special requests, colors, or budget..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C9A84C] resize-none"
                  style={inputStyle}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full py-4 text-base font-semibold text-white shadow-md active:scale-[0.97] transition-[transform,background-color,box-shadow] duration-160 ease-out"
              style={{
                backgroundColor: brand.colors.primary,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brand.colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brand.colors.primary)}
            >
              Request Free Quote on WhatsApp
            </button>

            <p className="mt-4 text-center text-xs" style={{ color: brand.colors.textLight }}>
              Instant response directly to your WhatsApp. No obligations.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

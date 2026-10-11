import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#E8CCC7] selection:text-[#2D2926]">
      {/* 1. Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Services */}
        <Services />

        {/* 5. Gallery */}
        <Gallery />

        {/* 6. How it works */}
        <HowItWorks />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Quote form */}
        <QuoteForm />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating Action CTA */}
      <WhatsAppButton />
    </div>
  );
}

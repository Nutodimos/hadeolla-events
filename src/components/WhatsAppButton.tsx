import { brand } from '@/lib/brand';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
    "Hello! I would like to inquire about event planning with Hadeholla."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hadeholla on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg whatsapp-pulse active:scale-[0.95] transition-transform duration-160 ease-out"
      style={{ backgroundColor: '#25D366' }}
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
}

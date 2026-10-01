import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp directo"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-[#0A2612] p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block font-bold text-xs tracking-tight">
          WhatsApp directo
        </span>
      </a>
    </aside>
  );
};

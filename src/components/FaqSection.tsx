import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

interface FaqSectionProps {
  onScrollToContact?: (customMessage?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onScrollToContact }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-[#F9F8F6] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className={`max-w-[540px] mb-8 text-left scroll-reveal ${isInView ? 'is-visible' : ''}`}>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#A83B5E] mb-1 block">
            Preguntas Frecuentes
          </span>
          <h2 className="font-display text-[26px] sm:text-[32px] font-bold text-[#14171E] tracking-tight leading-tight">
            Respuestas directas
          </h2>
        </div>

        {/* 2-Column Grid: FAQ Accordions on Left, Abilia Avatar on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Accordion Cards (Left side: 7 cols) */}
          <div className="lg:col-span-7 space-y-2.5 text-left">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openId === faq.id;
              const delayClass = `delay-${(index % 4) + 1}`;

              return (
                <div
                  key={faq.id}
                  className={`card-hover-fx rounded-2xl border transition-all duration-300 overflow-hidden scroll-reveal ${delayClass} ${
                    isInView ? 'is-visible' : ''
                  } ${
                    isOpen
                      ? 'bg-[#2A1F29] border-[#2DD4BF] shadow-md ring-1 ring-[#2DD4BF]/25 -translate-y-1'
                      : 'bg-[#241C23] border-[#3E2D3B] hover:border-[#2DD4BF]/60'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-3.5 px-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none group"
                  >
                    <span className={`font-display text-[15px] font-bold leading-snug transition-colors ${
                      isOpen ? 'text-[#2DD4BF]' : 'text-white group-hover:text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#0E2924] text-[#2DD4BF]' : 'bg-[#352331] text-[#F8C8D8] group-hover:bg-[#432A3E]'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-[13px] text-gray-200 leading-[1.55] border-t border-[#382635] animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                      {faq.highlight && (
                        <div className="mt-2.5 inline-block text-[11px] font-bold text-[#2DD4BF] bg-[#0E2924] border border-[#175248] px-2.5 py-0.5 rounded-full shadow-2xs">
                          {faq.highlight}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side: Abilia Avatar directly on section background without card box */}
          <div className={`lg:col-span-5 flex flex-col items-center justify-center lg:sticky lg:top-24 scroll-reveal delay-2 ${isInView ? 'is-visible' : ''}`}>
            <div className="w-full max-w-[420px] mx-auto flex flex-col items-center justify-center text-center py-4">
              
              {/* Abilia Desk/Phone Avatar */}
              <div className="relative mx-auto w-60 sm:w-72 lg:w-80 h-auto flex items-center justify-center">
                <img
                  src="Gemini_Generated_Image_r1ezsqr1ezsqr1ez-removebg-preview.png"
                  alt="Abilia Venegas - Atención y Respuestas Directas"
                  className="w-full h-auto max-h-[380px] object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.14)] animate-float-slow select-none transition-transform duration-300 hover:scale-103"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('Gemini_Generated_Image_3n3t713n3t713n3t')) {
                      target.src = 'Gemini_Generated_Image_3n3t713n3t713n3t.png';
                    }
                  }}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

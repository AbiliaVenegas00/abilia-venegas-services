import React from 'react';
import { Globe, GraduationCap, Cpu, ShieldCheck, Check, ArrowRight, Palette } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onScrollToContact: (customMessage?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onScrollToContact
}) => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return Globe;
      case 'GraduationCap':
        return GraduationCap;
      case 'Cpu':
        return Cpu;
      case 'ShieldCheck':
        return ShieldCheck;
      default:
        return Globe;
    }
  };

  return (
    <section ref={ref} id="servicios" className="py-14 lg:py-20 bg-[#F9F8F6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header with Scroll Animation */}
        <div className={`max-w-[540px] mb-8 text-left scroll-reveal ${isInView ? 'is-visible' : ''}`}>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#A83B5E] mb-1 block">
            Servicios
          </span>
          <h2 className="font-display text-[26px] sm:text-[32px] font-bold text-[#14171E] tracking-tight leading-tight">
            Cómo puedo ayudarte
          </h2>
        </div>

        {/* Services Cards with Staggered Scroll Animation & Interactive Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch text-left">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            const isFeatured = service.featured;
            const delayClass = `delay-${index + 1}`;

            return (
              <div
                key={service.id}
                className={`card-hover-fx relative rounded-2xl p-6 flex flex-col justify-between group scroll-reveal ${delayClass} ${
                  isInView ? 'is-visible' : ''
                } ${
                  isFeatured
                    ? 'bg-[#2A1F29] border-2 border-[#F8C8D8] shadow-xl hover:border-[#F8C8D8] hover:shadow-[0_16px_36px_-10px_rgba(248,200,216,0.3)]'
                    : 'bg-[#241C23] border border-[#3E2D3B] shadow-md hover:border-[#2DD4BF]'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 right-6 bg-[#F8C8D8] text-[#14171E] border border-[#F0B8C9] text-[10px] font-bold uppercase tracking-wider py-0.5 px-3 rounded-full shadow-xs animate-bounce" style={{ animationDuration: '4s' }}>
                    Servicio Estrella
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${
                        isFeatured
                          ? 'bg-[#F8C8D8] text-[#14171E]'
                          : 'bg-[#352331] text-[#F8C8D8] border border-[#F8C8D8]/20 group-hover:text-[#2DD4BF] group-hover:border-[#2DD4BF]/40'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-[18px] font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[13.5px] text-gray-300 mb-4">
                    {service.tagline}
                  </p>

                  {/* Popping Bullets */}
                  <ul className="space-y-2 mb-5">
                    {service.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-[13px] text-[#F1F5F9] group/li">
                        <div className="w-4 h-4 rounded-full bg-[#0E2924] border border-[#175248] flex items-center justify-center shrink-0 group-hover/li:scale-115 transition-transform">
                          <Check className="w-2.5 h-2.5 text-[#2DD4BF] stroke-[3]" />
                        </div>
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#382635]">
                  <button
                    onClick={() => onSelectService(service)}
                    className={`btn-shimmer w-full py-2.5 px-4 rounded-xl font-bold text-[13px] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                      isFeatured
                        ? 'bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] border border-[#F0B8C9] shadow-xs'
                        : 'bg-[#352331] hover:bg-[#432C3E] text-white border border-[#4E3448] hover:border-[#2DD4BF]/50'
                    }`}
                  >
                    <span>{service.ctaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Band with Scroll Reveal */}
        <div className={`card-hover-fx mt-6 bg-[#241C23] border border-[#3E2D3B] hover:border-[#2DD4BF]/50 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-left shadow-sm group scroll-reveal delay-4 ${isInView ? 'is-visible' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0E2924] text-[#2DD4BF] border border-[#175248] flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-300">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[13.5px] font-bold text-white">
                ¿Buscas también identidad de marca o campañas publicitarias?
              </p>
              <p className="text-xs text-gray-300">
                Diseño logos, manuales de marca y anuncios visuales para tu negocio.
              </p>
            </div>
          </div>

          <button
            onClick={() => onScrollToContact('Hola Abilia, me interesa consultarte por branding o campañas digitales.')}
            className="btn-shimmer shrink-0 bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] border border-[#F0B8C9] text-xs font-bold flex items-center gap-1.5 py-1.5 px-3 rounded-lg transition-all cursor-pointer shadow-2xs active:scale-95 group/btn"
          >
            <span>Cotizar</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

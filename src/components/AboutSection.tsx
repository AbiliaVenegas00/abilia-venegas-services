import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AbiliaAvatar } from './AbiliaAvatar';

interface AboutSectionProps {
  onScrollToContact: (msg?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onScrollToContact }) => {
  return (
    <section id="sobre-mi" className="py-14 lg:py-20 bg-[#1F1F1F] text-white border-b border-[#2C2C2C] relative overflow-hidden">
      {/* Decorative ambient aura */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-80 h-80 bg-[#2DD4BF]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo Column with Subtle Hover Zoom */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-[340px] mx-auto lg:max-w-none group">
              <div className="transition-transform duration-500 group-hover:scale-[1.015]">
                <AbiliaAvatar size="about" src="./devabilia.jpg" objectPosition="object-center" />
              </div>
            </div>
          </div>

          {/* Ultra-condensed Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F8C8D8] mb-1 block">
              Sobre mí
            </span>

            <h2 className="font-display text-[26px] sm:text-[34px] font-bold text-white tracking-tight leading-tight mb-3.5">
              Hola, soy Abilia Venegas
            </h2>

            <div className="space-y-2.5 text-[14.5px] sm:text-[15.5px] text-gray-300 leading-[1.55]">
              <p>
                <strong className="text-white">Ingeniera en Informática & Desarrolladora Full Stack</strong>. Construyo plataformas web modernas, servidores Linux seguros y flujos automatizados con Inteligencia Artificial.
              </p>

              <p>
                <strong className="text-[#2DD4BF]">Mi gran diferencial:</strong> Cero plantillas genéricas. Me tomo el tiempo de escuchar tus gustos estéticos, entender a fondo las necesidades de tu negocio y diseñar una solución tecnológica que encaje perfectamente contigo y con tu equipo.
              </p>
            </div>

            {/* Badges with Lift & Glow */}
            <div className="flex flex-wrap gap-2 my-4 text-xs font-bold">
              {['100% A tu gusto y medida', 'Cero plantillas genéricas', 'Código 100% tuyo', 'Trato directo'].map((text, idx) => (
                <span
                  key={idx}
                  className="card-hover-fx bg-[#241C23] hover:bg-[#2C212A] text-white border border-[#3E2D3B] hover:border-[#2DD4BF]/60 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-xs cursor-default"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>{text}</span>
                </span>
              ))}
            </div>

            <div className="pt-1">
              <button
                onClick={() => onScrollToContact('Hola Abilia, me gustaría platicar sobre un proyecto contigo.')}
                className="inline-flex items-center gap-2 text-[14px] font-bold text-[#F8C8D8] hover:text-[#2DD4BF] hover:underline transition-colors group cursor-pointer"
              >
                <span>Hablemos de tu proyecto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

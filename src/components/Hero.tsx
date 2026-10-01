import React from 'react';
import { Calendar, ArrowRight, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { AbiliaAvatar } from './AbiliaAvatar';

interface HeroProps {
  onOpenSchedule: () => void;
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule, onScrollToProjects }) => {
  return (
    <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-[#F9F8F6]">
      {/* Animated subtle ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#F8C8D8]/35 via-[#2DD4BF]/15 to-[#F2EFE9] blur-3xl pointer-events-none -z-10 animate-pulse-glow" 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Hook de Alto Impacto: Auditorías, Llamadas y Diagnósticos GRATUITOS */}
            <div className="mb-4 inline-flex items-center group cursor-default">
              <div className="bg-[#241C23] text-white px-3.5 py-1.5 rounded-full border border-[#2DD4BF]/70 shadow-sm flex items-center gap-2 text-[12px] sm:text-[13px] font-medium transition-all group-hover:border-[#2DD4BF]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]" />
                </span>
                <span className="text-gray-200">
                  Auditorías, llamadas de 15 min y diagnósticos{' '}
                  <span className="text-[#2DD4BF] font-extrabold uppercase tracking-wide">
                    100% GRATUITOS
                  </span>
                </span>
              </div>
            </div>

            {/* H1 with tight tracking */}
            <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-[#14171E] leading-[1.12] tracking-tight mb-4 max-w-[620px]">
              Tu sitio web y tecnología, en manos de una sola experta.
            </h1>

            {/* Subtítulo minimalista */}
            <p className="text-[16px] sm:text-[17px] text-[#5C6470] leading-[1.55] max-w-[560px] mb-5">
              Desarrollo web a la medida, administración segura de servidores y automatización de procesos con Inteligencia Artificial.
            </p>

            {/* Interactive keyword tags with micro-scale on hover */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#8E2E4B] mb-7">
              {['Web Full Stack', 'Automatización IA', 'Moodle LMS', 'Ciberseguridad TI'].map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white/80 hover:bg-white text-[#14171E] hover:text-[#2DD4BF] border border-[#E8E4DD] hover:border-[#2DD4BF]/50 px-2.5 py-1 rounded-lg shadow-2xs transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Shimmer Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-3">
              <button
                onClick={onOpenSchedule}
                className="btn-shimmer bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] text-[14.5px] font-bold px-5 py-3 rounded-xl border border-[#F0B8C9] shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(248,200,216,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#8E2E4B]" />
                <span>Agenda una llamada gratuita (15 min)</span>
              </button>

              <button
                onClick={onScrollToProjects}
                className="btn-shimmer bg-white hover:bg-[#F2EFE9] border border-[#E8E4DD] text-[#14171E] text-[14.5px] font-semibold px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-[#2DD4BF]/60 hover:shadow-xs active:scale-95 group"
              >
                <span>Ver proyectos</span>
                <ArrowRight className="w-4 h-4 text-[#8E2E4B] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* WhatsApp direct line with pulsing green indicator */}
            <div className="flex items-center gap-2 text-xs text-[#5C6470] mt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Respondo en menos de 24 horas</span>
              <span className="text-gray-300">·</span>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#8E2E4B] hover:text-[#2DD4BF] hover:underline flex items-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Photo with subtle floating pill animation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[390px] group">
              
              {/* Photo component */}
              <div className="transition-transform duration-500 group-hover:scale-[1.01]">
                <AbiliaAvatar size="hero" />
              </div>

              {/* Status Floating Pill with Gentle Float Animation */}
              <div className="animate-float-slow absolute -bottom-3 left-4 right-4 bg-[#14171E]/95 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 shadow-xl flex items-center justify-between transition-transform duration-300 hover:scale-[1.02]">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#2DD4BF]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]" />
                    </span>
                    <span>Disponible este mes</span>
                  </div>
                  <p className="text-xs font-bold text-white mt-0.5">
                    Abilia Venegas
                  </p>
                </div>

                <div className="bg-white/10 px-2.5 py-1 rounded-lg text-right border border-white/10">
                  <span className="text-[10px] font-bold text-[#F8C8D8] block">
                    Google & Cisco
                  </span>
                  <span className="text-[10px] text-gray-300">
                    Certificada
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

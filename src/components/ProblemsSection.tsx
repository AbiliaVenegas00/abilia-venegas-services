import React from 'react';
import { Gauge, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const ProblemsSection: React.FC = () => {
  const problems = [
    {
      id: 1,
      icon: Gauge,
      problem: '“Las plantillas genéricas no reflejan mis gustos ni se adaptan a mi negocio.”',
      solution: 'Diseño y desarrollo 100% a la medida de tu identidad y procesos.',
      tag: 'Cero plantillas'
    },
    {
      id: 2,
      icon: Clock,
      problem: '“Demasiadas horas perdidas en tareas manuales y repetitivas.”',
      solution: 'Automatización con IA adaptada al ritmo y flujo exacto de tu equipo.',
      tag: 'Ahorro de tiempo'
    },
    {
      id: 3,
      icon: ShieldAlert,
      problem: '“Sistemas rígidos o servidores sin respaldo ni soporte directo.”',
      solution: 'Infraestructura a tu medida, código 100% tuyo y soporte personal.',
      tag: 'Trato directo'
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-[#121114] text-white border-b border-[#2C2C2C] relative overflow-hidden">
      {/* Intense luminous ambient orbs for marked glass refraction */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/12 w-[420px] h-[350px] bg-gradient-to-br from-[#2DD4BF]/30 to-[#0D9488]/10 rounded-full blur-[85px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-1/4 right-1/12 w-[420px] h-[350px] bg-gradient-to-tl from-[#F8C8D8]/35 to-[#EC4899]/15 rounded-full blur-[85px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[260px] bg-[#A855F7]/15 rounded-full blur-[90px] pointer-events-none" 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-[540px] mb-8 text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#F8C8D8] mb-1 block">
            Problemas & Soluciones
          </span>
          <h2 className="font-display text-[26px] sm:text-[32px] font-bold text-white tracking-tight leading-tight">
            ¿Te suena familiar?
          </h2>
        </div>

        {/* 3 High-Impact Animated Cards with Marked Crystal Glass Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="card-hover-fx bg-[#231722]/40 hover:bg-[#231722]/60 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 hover:border-[#2DD4BF] shadow-[0_12px_40px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.25)] flex flex-col justify-between group cursor-default transition-all duration-300 relative overflow-hidden"
              >
                {/* Specular glass reflection & bevel shine */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.02] to-transparent pointer-events-none rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.08] backdrop-blur-md text-[#F8C8D8] group-hover:text-[#2DD4BF] group-hover:scale-110 border border-white/20 group-hover:border-[#2DD4BF]/50 flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Mint Tag with micro-scale on hover */}
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#2DD4BF] bg-[#0E2924]/80 backdrop-blur-md border border-[#2DD4BF]/50 px-2.5 py-0.5 rounded-full group-hover:bg-[#133831] transition-colors shadow-2xs">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-[15px] font-semibold text-white leading-snug mb-4">
                    {item.problem}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-white/15 relative z-10">
                  <div className="flex items-start gap-2 text-[#2DD4BF] font-bold text-[13.5px]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#2DD4BF] group-hover:scale-115 transition-transform" />
                    <span className="leading-snug">{item.solution}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

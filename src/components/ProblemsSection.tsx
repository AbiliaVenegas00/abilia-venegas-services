import React from 'react';
import { Gauge, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const ProblemsSection: React.FC = () => {
  const problems = [
    {
      id: 1,
      icon: Gauge,
      problem: '“Mi web es lenta y no genera prospectos.”',
      solution: 'Rediseño con carga < 1s y embudo optimizado.',
      tag: 'Más conversión'
    },
    {
      id: 2,
      icon: Clock,
      problem: '“Demasiadas horas en tareas manuales.”',
      solution: 'Automatización con IA y conexión de apps 24/7.',
      tag: 'Ahorro de tiempo'
    },
    {
      id: 3,
      icon: ShieldAlert,
      problem: '“Servidores sin respaldo ni seguridad clara.”',
      solution: 'Blindaje de infraestructura y copias cifradas.',
      tag: 'Disponibilidad 99.9%'
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-[#1F1F1F] text-white border-b border-[#2C2C2C] relative overflow-hidden">
      {/* Decorative ambient aura */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 -right-40 w-96 h-96 bg-[#2DD4BF]/5 rounded-full blur-3xl pointer-events-none" 
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

        {/* 3 High-Impact Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="card-hover-fx bg-[#241C23] rounded-2xl p-6 border border-[#3E2D3B] shadow-md flex flex-col justify-between hover:border-[#2DD4BF] group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#352331] text-[#F8C8D8] group-hover:text-[#2DD4BF] group-hover:scale-110 border border-[#F8C8D8]/20 group-hover:border-[#2DD4BF]/40 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Mint Tag with micro-scale on hover */}
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#2DD4BF] bg-[#0E2924] border border-[#175248] px-2.5 py-0.5 rounded-full group-hover:bg-[#133831] transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-[15px] font-semibold text-white leading-snug mb-4">
                    {item.problem}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#382635]">
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

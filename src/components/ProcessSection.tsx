import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/portfolioData';

interface ProcessSectionProps {
  onOpenSchedule: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenSchedule }) => {
  return (
    <section id="proceso" className="py-14 lg:py-20 bg-[#F9F8F6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-[540px] mb-8 text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#A83B5E] mb-1 block">
            Metodología
          </span>
          <h2 className="font-display text-[26px] sm:text-[32px] font-bold text-[#14171E] tracking-tight leading-tight">
            Así trabajamos
          </h2>
        </div>

        {/* 4 Cards with Smooth Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {WORK_PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="card-hover-fx bg-[#241C23] rounded-2xl p-5 border border-[#3E2D3B] flex flex-col justify-between hover:border-[#2DD4BF] shadow-md group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  {/* Step Number with hover pulse */}
                  <span className="font-display text-2xl font-black text-[#2DD4BF] group-hover:scale-115 transition-transform duration-300 origin-left inline-block">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold text-[#14171E] bg-[#F8C8D8] px-2 py-0.5 rounded-md shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-[15px] font-bold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[12.5px] text-gray-300 leading-[1.45] mb-3.5">
                  {item.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#382635] text-xs text-gray-400 flex items-center justify-between">
                <span>Tiempo:</span>
                <span className="font-bold text-[#2DD4BF] group-hover:text-white transition-colors">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="card-hover-fx mt-6 bg-[#241C23] rounded-2xl p-4 sm:p-5 border border-[#3E2D3B] hover:border-[#2DD4BF]/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-left shadow-md group">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2DD4BF] shrink-0 group-hover:scale-115 transition-transform" />
            <p className="text-[13px] text-gray-200">
              <strong className="text-white">100% Hecho a tu medida:</strong> Cero plantillas genéricas. Código limpio, servidores propios y tecnología que se adapta fielmente a tus gustos y necesidades.
            </p>
          </div>

          <button
            onClick={onOpenSchedule}
            className="btn-shimmer shrink-0 bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] border border-[#F0B8C9] px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95 group/btn"
          >
            <Calendar className="w-3.5 h-3.5 group-hover/btn:rotate-6 transition-transform" />
            <span>Agendar llamada</span>
          </button>
        </div>

      </div>
    </section>
  );
};

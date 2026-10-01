import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onWantSimilar: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onWantSimilar
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#241C23] rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-[#3E2D3B] text-left my-8 animate-in zoom-in-95 duration-150 text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#382635] mb-4">
          <div>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#F8C8D8] block">
              {project.category} · {project.clientType}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image Preview */}
        <div className="rounded-xl overflow-hidden mb-4 border border-[#382635] relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-52 object-cover"
          />
          {/* Popping Mint Metric Banner */}
          <div className="absolute bottom-3 right-3 bg-[#0E2924]/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-xs border border-[#175248]">
            {project.metrics.label}: <span className="text-[#2DD4BF] font-extrabold">{project.metrics.value}</span>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-3.5 text-xs sm:text-sm text-gray-300">
          <div>
            <h4 className="font-display text-xs font-bold text-rose-300 uppercase tracking-wider mb-1">
              Desafío inicial:
            </h4>
            <p className="leading-relaxed bg-[#1C161B] p-2.5 rounded-xl border border-[#352533] text-gray-200">
              {project.challenge}
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold text-[#2DD4BF] uppercase tracking-wider mb-1">
              Solución desarrollada:
            </h4>
            <p className="leading-relaxed bg-[#1C161B] p-2.5 rounded-xl border border-[#352533] text-gray-200">
              {project.solution}
            </p>
          </div>

          {project.detailedCaseStudy && (
            <div>
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                Entregables clave:
              </h4>
              <ul className="grid grid-cols-1 gap-1.5">
                {project.detailedCaseStudy.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-[#1C161B] p-2 rounded-lg border border-[#352533] text-xs text-gray-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-1">
              Tecnologías:
            </span>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-[#352331] border border-[#483344] text-gray-200 text-[11px] px-2 py-0.5 rounded-md font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-5 pt-3.5 border-t border-[#382635] flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white border border-[#3E2D3B] rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
          >
            Cerrar
          </button>

          <button
            onClick={() => {
              onClose();
              onWantSimilar(project);
            }}
            className="w-full sm:w-auto bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] border border-[#F0B8C9] px-5 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
          >
            <span>Quiero algo similar</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#14171E]" />
          </button>
        </div>

      </div>
    </div>
  );
};

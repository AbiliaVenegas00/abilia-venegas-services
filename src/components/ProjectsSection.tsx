import React from 'react';
import { ExternalLink, ArrowRight, Laptop, LayoutTemplate, PenTool, BarChart3, CalendarCheck } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

interface ProjectsSectionProps {
  onViewProject: (project: ProjectItem) => void;
  onWantSimilar: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onViewProject,
  onWantSimilar
}) => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'branding-builder':
        return LayoutTemplate;
      case 'generador-contenidos':
        return PenTool;
      case 'data-visualization-dashboard':
        return BarChart3;
      case 'calendar-task':
      case 'crm-calendar-task':
        return CalendarCheck;
      default:
        return Laptop;
    }
  };

  return (
    <section ref={ref} id="proyectos" className="py-14 lg:py-20 bg-[#1F1F1F] text-white border-b border-[#2C2C2C] relative overflow-hidden">
      {/* Decorative ambient aura */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-10 w-96 h-96 bg-[#F8C8D8]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header with Scroll Reveal */}
        <div className={`max-w-[540px] mb-8 text-left scroll-reveal ${isInView ? 'is-visible' : ''}`}>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#F8C8D8] mb-1 block">
            Casos Reales
          </span>
          <h2 className="font-display text-[26px] sm:text-[32px] font-bold text-white tracking-tight leading-tight">
            Proyectos y resultados
          </h2>
        </div>

        {/* 4 White Project Cards with Cascading Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
          {PROJECTS_DATA.map((project, index) => {
            const IconComponent = getProjectIcon(project.id);
            const delayClass = `delay-${index + 1}`;

            return (
              <div
                key={project.id}
                className={`card-hover-fx bg-white text-[#14171E] rounded-2xl border border-gray-200/80 shadow-lg overflow-hidden hover:border-[#2DD4BF] hover:shadow-2xl flex flex-col justify-between group cursor-default transition-all scroll-reveal ${delayClass} ${
                  isInView ? 'is-visible' : ''
                }`}
              >
                <div>
                  {/* Laptop Mockup Banner (Soft gray backdrop) */}
                  <div className="bg-[#F6F7F9] p-4 sm:p-5 relative overflow-hidden border-b border-gray-100">
                    <div className="w-full bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-2xs group-hover:border-gray-300 transition-colors">
                      {/* Clean Window Title Bar without URL */}
                      <div className="bg-[#ECEEF2] px-3 py-2 flex items-center gap-1.5 border-b border-gray-200">
                        <div className="w-2 h-2 rounded-full bg-[#F8C8D8]" />
                        <div className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
                        <div className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
                      </div>

                      {/* Image with zoom effect */}
                      <div
                        className="relative overflow-hidden cursor-pointer"
                        onClick={() => onViewProject(project)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[170px] sm:h-[190px] object-cover object-center transition-transform duration-500 group-hover:scale-106"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#14171E]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-2xs">
                          <span className="btn-shimmer bg-[#F8C8D8] text-[#14171E] text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                            <Laptop className="w-3.5 h-3.5 text-[#8E2E4B]" />
                            Ver caso completo
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Metric Bar in White Card */}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#A83B5E]">
                        {project.category}
                      </span>
                      <div className="inline-flex items-center gap-1.5 bg-[#0D9488]/10 border border-[#0D9488]/30 px-3 py-0.5 rounded-full text-xs shadow-2xs">
                        <span className="text-[#0D9488] font-black">{project.metrics.value}</span>
                        <span className="text-gray-600 text-[10.5px] font-medium">{project.metrics.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details inside White Card */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-[#FDF2F4] text-[#A83B5E] border border-[#F8C8D8] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-display text-[18px] font-bold text-[#14171E]">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#A83B5E] mb-3">
                      {project.clientType}
                    </p>

                    <div className="space-y-1.5 mb-3.5 text-[13.5px] text-[#475569] leading-relaxed">
                      <p>
                        <strong className="text-[#14171E]">Reto:</strong> {project.challenge}
                      </p>
                      <p>
                        <strong className="text-[#0D9488]">Solución:</strong> {project.solution}
                      </p>
                    </div>

                    {/* Result Callout */}
                    <div className="p-2.5 rounded-xl bg-[#F0FDFA] border border-[#99F6E4] mb-3.5 text-xs flex items-center justify-between">
                      <span className="text-[#0D9488] font-bold uppercase text-[10.5px] tracking-wider">Resultado clave:</span>
                      <span className="font-bold text-[#0F172A] text-[12px]">{project.result}</span>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-gray-700">
                      {project.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-gray-200 px-2 py-0.5 rounded text-gray-700 font-medium transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-5 sm:p-6 pt-0 flex items-center gap-2.5">
                  <button
                    onClick={() => onViewProject(project)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 border border-gray-300/80 text-[#14171E] py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 group/btn1"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#0D9488] group-hover/btn1:scale-110 transition-transform" />
                    <span>Ver detalle</span>
                  </button>

                  <button
                    onClick={() => onWantSimilar(project)}
                    className="btn-shimmer flex-1 bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] border border-[#F0B8C9] py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs active:scale-95 group/btn2"
                  >
                    <span>Quiero algo similar</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#14171E] group-hover/btn2:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

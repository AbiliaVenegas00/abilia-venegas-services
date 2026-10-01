import React, { useState } from 'react';
import { ExternalLink, Code2, Server, Sparkles, Layers } from 'lucide-react';
import { TOOLS_DATA, CERTIFICATIONS_DATA, CertificationItem } from '../data/portfolioData';

export const ToolsCertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const getGroupIcon = (category: string) => {
    switch (category) {
      case 'Desarrollo':
        return Code2;
      case 'Infraestructura':
        return Server;
      case 'Inteligencia Artificial':
        return Sparkles;
      case 'Diseño & Analytics':
        return Layers;
      default:
        return Code2;
    }
  };

  return (
    <section className="py-14 lg:py-20 bg-[#F9F8F6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-[540px] mb-8 text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#A83B5E] mb-1 block">
            Competencias
          </span>
          <h2 className="font-display text-[26px] sm:text-[32px] font-bold text-[#14171E] tracking-tight leading-tight">
            Herramientas y certificaciones
          </h2>
        </div>

        {/* 4 Tool Groups with Lift & Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
          {TOOLS_DATA.map((group) => {
            const Icon = getGroupIcon(group.category);
            return (
              <div
                key={group.category}
                className="card-hover-fx bg-[#241C23] rounded-2xl p-5 border border-[#3E2D3B] hover:border-[#2DD4BF] shadow-md group cursor-default"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#352331] text-[#F8C8D8] group-hover:text-[#2DD4BF] group-hover:scale-110 border border-[#F8C8D8]/20 group-hover:border-[#2DD4BF]/40 flex items-center justify-center transition-all duration-300">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-display text-[14px] font-bold text-white group-hover:text-white transition-colors">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-gray-200 bg-[#31232E] hover:bg-[#402C3C] border border-[#443040] hover:border-[#2DD4BF]/50 px-2 py-0.5 rounded-md hover:text-white transition-all duration-150 hover:-translate-y-0.5 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Subheading */}
        <div className="mb-4 text-left">
          <h3 className="font-display text-[17px] font-bold text-[#14171E]">
            Acreditaciones oficiales
          </h3>
        </div>

        {/* Certification Cards with Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <div
              key={index}
              className="card-hover-fx bg-[#241C23] rounded-xl p-4 border border-[#3E2D3B] shadow-md hover:border-[#2DD4BF] transition-all flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#0E2924] text-[#2DD4BF] border border-[#175248] group-hover:bg-[#143B34] transition-colors">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] text-gray-400 font-semibold">
                    {cert.year}
                  </span>
                </div>

                <h4 className="font-display text-[13px] font-bold text-white leading-snug mb-1">
                  {cert.name}
                </h4>
              </div>

              <div className="pt-2.5 border-t border-[#382635] flex items-center justify-between mt-2.5">
                <span className="text-[10px] font-mono text-gray-400">
                  {cert.credentialId}
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-[11.5px] font-bold text-[#2DD4BF] hover:underline inline-flex items-center gap-1 cursor-pointer group/link"
                >
                  <span>Verificar</span>
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-2xs">
          <div className="bg-[#241C23] rounded-2xl max-w-sm w-full p-5 shadow-2xl border border-[#3E2D3B] text-left animate-in zoom-in-95 duration-150 text-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2DD4BF] bg-[#0E2924] border border-[#175248] px-2 py-0.5 rounded-md">
                Acreditación Oficial
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-white text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <h4 className="font-display text-base font-bold text-white mb-1">
              {selectedCert.name}
            </h4>
            <p className="text-xs text-gray-300 mb-4">
              Emitida a <strong>Abilia Venegas</strong> por <strong>{selectedCert.issuer}</strong>
            </p>

            <div className="bg-[#31232E] p-3 rounded-xl border border-[#443040] mb-4 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Año:</span>
                <span className="font-bold text-white">{selectedCert.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ID Credencial:</span>
                <span className="font-mono font-bold text-[#2DD4BF]">{selectedCert.credentialId}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={selectedCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer flex-1 bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] py-2 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5 border border-[#F0B8C9] active:scale-95"
              >
                <span>Validar en portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-3 py-2 border border-[#3E2D3B] text-gray-300 rounded-xl text-xs font-semibold hover:bg-white/5 cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

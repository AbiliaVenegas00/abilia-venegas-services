import React from 'react';
import { Mail, Phone, Linkedin, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenSchedule: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenSchedule }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-gray-400 py-12 border-t border-[#262626]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8 border-b border-[#262626] text-center md:text-left">
          
          {/* Logo & Persona */}
          <div className="max-w-[340px]">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#282127] border border-[#3F323D] text-[#F8C8D8] flex items-center justify-center font-bold text-sm font-display">
                AV
              </div>
              <span className="font-display font-bold text-base text-white">
                Abilia Venegas
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Ingeniera en Informática & Desarrolladora Full Stack. Sitios web a medida, Moodle LMS y automatización con IA.
            </p>
            <div className="text-xs text-[#F8C8D8] font-mono space-y-0.5">
              <div>{CONTACT_INFO.email}</div>
              <div>{CONTACT_INFO.phoneDisplay}</div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-5 text-[13px] font-medium text-gray-300">
            <button
              onClick={() => scrollTo('servicios')}
              className="hover:text-[#F8C8D8] transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo('proyectos')}
              className="hover:text-[#F8C8D8] transition-colors cursor-pointer"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollTo('proceso')}
              className="hover:text-[#F8C8D8] transition-colors cursor-pointer"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollTo('sobre-mi')}
              className="hover:text-[#F8C8D8] transition-colors cursor-pointer"
            >
              Sobre mí
            </button>
            <button
              onClick={onOpenSchedule}
              className="text-[#F8C8D8] hover:underline font-bold transition-colors cursor-pointer"
            >
              Agendar llamada
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label="Correo electrónico"
              className="w-8 h-8 rounded-lg bg-[#282127] border border-[#3F323D] hover:border-[#F8C8D8]/60 text-gray-300 hover:text-[#F8C8D8] flex items-center justify-center transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-lg bg-[#282127] border border-[#3F323D] hover:border-emerald-500/60 text-gray-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Abilia Venegas"
              className="w-8 h-8 rounded-lg bg-[#282127] border border-[#3F323D] hover:border-white/40 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={CONTACT_INFO.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="w-8 h-8 rounded-lg bg-[#282127] border border-[#3F323D] hover:border-white/40 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © 2026 Abilia Venegas. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-gray-300 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Aviso de privacidad
            </button>
            <span>·</span>
            <span>Irapuato, Gto. & Remoto</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

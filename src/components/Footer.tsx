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
              aria-label="Portafolio Behance de Abilia Venegas"
              className="w-8 h-8 rounded-lg bg-[#282127] border border-[#3F323D] hover:border-[#F8C8D8]/80 text-gray-300 hover:text-[#F8C8D8] flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.102 0-5.625-3.001-5.625-5.969 0-3.032 1.761-6.031 5.563-6.031 4.093 0 5.438 3.016 5.438 6.203 0 .422-.047.875-.078 1.094h-8.156c.094 1.766 1.078 3.031 2.875 3.031 1.297 0 2.25-.688 2.656-1.328h2.428zm-7.984-3.5h5.484c-.109-1.344-.922-2.344-2.656-2.344-1.688 0-2.641.984-2.828 2.344zm-9.742 5.5h-6v-14h6.078c3.219 0 4.922 1.344 4.922 3.844 0 1.578-.859 2.766-2.281 3.328 1.844.5 2.641 1.953 2.641 3.594 0 2.594-1.922 3.234-5.36 3.234zm-3.328-11.594v3.188h2.625c1.438 0 2.156-.563 2.156-1.578 0-1.047-.781-1.61-2.188-1.61h-2.593zm0 5.438v3.719h2.828c1.516 0 2.391-.656 2.391-1.875 0-1.25-.875-1.844-2.453-1.844h-2.766z"/>
              </svg>
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

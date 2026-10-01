import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 glass-nav shadow-xs border-b border-[#F5E6EC] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8839F] rounded-lg cursor-pointer"
          aria-label="Abilia Venegas - Inicio"
        >
          <div className="w-10 h-10 rounded-xl bg-[#111318] text-[#F8C8D8] border border-[#F3BACB]/40 flex items-center justify-center font-bold text-lg font-display tracking-tight transition-transform group-hover:scale-105 shadow-xs">
            AV
          </div>
          <div>
            <span className="font-display font-bold text-lg text-[#111318] tracking-tight block leading-tight">
              Abilia Venegas
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E8839F] block">
              Ing. Informática · Full Stack
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <button
            onClick={() => scrollTo('servicios')}
            className="text-[15px] font-medium text-[#17191E] hover:text-[#E8839F] transition-colors cursor-pointer"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollTo('proyectos')}
            className="text-[15px] font-medium text-[#17191E] hover:text-[#E8839F] transition-colors cursor-pointer"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollTo('proceso')}
            className="text-[15px] font-medium text-[#17191E] hover:text-[#E8839F] transition-colors cursor-pointer"
          >
            Proceso
          </button>
          <button
            onClick={() => scrollTo('sobre-mi')}
            className="text-[15px] font-medium text-[#17191E] hover:text-[#E8839F] transition-colors cursor-pointer"
          >
            Sobre mí
          </button>

          {/* Accented CTA Button in Blush Pink */}
          <button
            onClick={onOpenSchedule}
            className="bg-[#F8C8D8] hover:bg-[#F3BACB] text-[#111318] font-bold text-[14px] px-5 py-2.5 rounded-[12px] border border-[#F0A9BD] shadow-2xs hover:shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 text-[#8C2C47]" />
            <span>Llamada Gratuita</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#17191E] hover:bg-[#FCE8EF] transition-colors"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#F5E6EC] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-left">
            <button
              onClick={() => scrollTo('servicios')}
              className="py-2 text-base font-medium text-[#17191E] hover:text-[#E8839F]"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo('proyectos')}
              className="py-2 text-base font-medium text-[#17191E] hover:text-[#E8839F]"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollTo('proceso')}
              className="py-2 text-base font-medium text-[#17191E] hover:text-[#E8839F]"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollTo('sobre-mi')}
              className="py-2 text-base font-medium text-[#17191E] hover:text-[#E8839F]"
            >
              Sobre mí
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="mt-2 w-full bg-[#F8C8D8] hover:bg-[#F3BACB] text-[#111318] py-3 rounded-[12px] font-bold flex items-center justify-center gap-2 border border-[#F0A9BD] shadow-xs text-center"
            >
              <Calendar className="w-4 h-4 text-[#8C2C47]" />
              <span>Llamada Gratuita</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

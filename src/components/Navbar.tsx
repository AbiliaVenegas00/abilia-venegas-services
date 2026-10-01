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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F8C8D8]/95 backdrop-blur-md border-b border-[#F0B8C9] shadow-xs ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8E2E4B] rounded-lg cursor-pointer transition-transform group-hover:scale-[1.02]"
          aria-label="Abilia Venegas - Inicio"
        >
          <span className="font-display font-bold text-lg sm:text-[19px] text-[#14171E] tracking-tight block leading-tight">
            Abilia Venegas
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E2E4B] block mt-0.5">
            Ing. Informática · Full Stack
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <button
            onClick={() => scrollTo('servicios')}
            className="text-[15px] font-semibold text-[#14171E] hover:text-[#8E2E4B] transition-colors cursor-pointer"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollTo('proyectos')}
            className="text-[15px] font-semibold text-[#14171E] hover:text-[#8E2E4B] transition-colors cursor-pointer"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollTo('proceso')}
            className="text-[15px] font-semibold text-[#14171E] hover:text-[#8E2E4B] transition-colors cursor-pointer"
          >
            Proceso
          </button>
          <button
            onClick={() => scrollTo('sobre-mi')}
            className="text-[15px] font-semibold text-[#14171E] hover:text-[#8E2E4B] transition-colors cursor-pointer"
          >
            Sobre mí
          </button>

          {/* Action Button in Mint Green */}
          <button
            onClick={onOpenSchedule}
            className="bg-[#2DD4BF] hover:bg-[#14B8A6] text-[#0A201C] font-extrabold text-[14px] px-5 py-2.5 rounded-[12px] shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-[0.98] border border-[#20BFA8]"
          >
            <Calendar className="w-4 h-4 text-[#0A201C]" />
            <span>Llamada Gratuita</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#14171E] hover:bg-[#F2B4C7] transition-colors"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8C8D8] border-b border-[#F0B8C9] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-left">
            <button
              onClick={() => scrollTo('servicios')}
              className="py-2 text-base font-semibold text-[#14171E] hover:text-[#8E2E4B]"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo('proyectos')}
              className="py-2 text-base font-semibold text-[#14171E] hover:text-[#8E2E4B]"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollTo('proceso')}
              className="py-2 text-base font-semibold text-[#14171E] hover:text-[#8E2E4B]"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollTo('sobre-mi')}
              className="py-2 text-base font-semibold text-[#14171E] hover:text-[#8E2E4B]"
            >
              Sobre mí
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="mt-2 w-full bg-[#2DD4BF] hover:bg-[#14B8A6] text-[#0A201C] py-3 rounded-[12px] font-extrabold flex items-center justify-center gap-2 shadow-xs text-center border border-[#20BFA8]"
            >
              <Calendar className="w-4 h-4 text-[#0A201C]" />
              <span>Llamada Gratuita</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

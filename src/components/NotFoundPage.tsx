import React from 'react';
import { Home, ArrowLeft, MessageCircle, Calendar, Compass, Sparkles } from 'lucide-react';

interface NotFoundPageProps {
  onReturnHome: () => void;
  onOpenSchedule?: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onReturnHome, onOpenSchedule }) => {
  return (
    <div className="min-h-screen bg-[#121114] text-white flex flex-col justify-between relative overflow-hidden font-sans selection:bg-[#2DD4BF] selection:text-[#0A201C]">
      {/* Background ambient decorative glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-[#2DD4BF]/20 via-[#F8C8D8]/15 to-transparent blur-[100px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#2DD4BF]/10 blur-[90px] pointer-events-none"
      />

      {/* Top Simple Header */}
      <header className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-6 flex items-center justify-between relative z-10">
        <button
          onClick={onReturnHome}
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-[#241C23] border border-[#3E2D3B] group-hover:border-[#2DD4BF] flex items-center justify-center transition-colors shadow-xs">
            <span className="font-display font-black text-sm text-[#2DD4BF]">AV</span>
          </div>
          <div>
            <span className="font-display font-bold text-sm text-white block leading-tight">
              Abilia Venegas
            </span>
            <span className="text-[11px] text-gray-400 block">
              Desarrolladora & IA
            </span>
          </div>
        </button>

        <button
          onClick={onReturnHome}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-[#2DD4BF] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al portafolio</span>
        </button>
      </header>

      {/* Main 404 Hero Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 relative z-10">
        <div className="max-w-[580px] w-full text-center">
          
          {/* Friendly Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#241C23] border border-[#3E2D3B] text-[#F8C8D8] px-3.5 py-1.5 rounded-full text-xs font-bold mb-6 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#2DD4BF] animate-spin-slow" />
            <span>Error 404 · Ruta no encontrada</span>
          </div>

          {/* Big Stylized 404 Display Number */}
          <div className="relative mb-4 select-none">
            <h1 className="font-display text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#F8C8D8] to-[#2DD4BF] leading-none tracking-tight">
              404
            </h1>
            <div className="absolute inset-0 blur-2xl opacity-20 bg-gradient-to-r from-[#2DD4BF] to-[#F8C8D8] -z-10" />
          </div>

          {/* Friendly Title & Description */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            ¡Vaya! Parece que tomaste un desvío digital
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-[480px] mx-auto">
            La página o enlace que buscas no existe, cambió de nombre o fue movida. Pero no te preocupes, estás a un solo clic de regresar al portafolio principal.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-8">
            <button
              onClick={onReturnHome}
              className="w-full sm:w-auto btn-shimmer bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] font-bold text-sm px-6 py-3 rounded-xl border border-[#F0B8C9] shadow-md hover:shadow-[0_10px_25px_-5px_rgba(248,200,216,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 group"
            >
              <Home className="w-4 h-4 text-[#8E2E4B] group-hover:scale-110 transition-transform" />
              <span>Regresar al Inicio</span>
            </button>

            {onOpenSchedule && (
              <button
                onClick={onOpenSchedule}
                className="w-full sm:w-auto bg-[#241C23] hover:bg-[#2C212A] text-white font-semibold text-sm px-5 py-3 rounded-xl border border-[#3E2D3B] hover:border-[#2DD4BF] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#2DD4BF]" />
                <span>Agendar llamada (15 min)</span>
              </button>
            )}
          </div>

          {/* Helpful Quick Navigation Links */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-xs text-gray-400 mb-3 flex items-center justify-center gap-1.5 font-medium">
              <Sparkles className="w-3 h-3 text-[#2DD4BF]" />
              <span>O salta directamente a una sección:</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
              <button
                onClick={() => {
                  onReturnHome();
                  setTimeout(() => {
                    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-[#241C23] hover:bg-[#2C212A] text-gray-300 hover:text-[#2DD4BF] border border-[#3E2D3B] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                Proyectos & Casos
              </button>

              <button
                onClick={() => {
                  onReturnHome();
                  setTimeout(() => {
                    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-[#241C23] hover:bg-[#2C212A] text-gray-300 hover:text-[#2DD4BF] border border-[#3E2D3B] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                Servicios a Medida
              </button>

              <button
                onClick={() => {
                  onReturnHome();
                  setTimeout(() => {
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-[#241C23] hover:bg-[#2C212A] text-gray-300 hover:text-[#2DD4BF] border border-[#3E2D3B] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                Contacto Directo
              </button>

              <a
                href="https://wa.me/524622450193?text=Hola%20Abilia,%20llegue%20a%20tu%20sitio%20y%20me%20gustaria%20platicar."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 px-3 py-1.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer copyright */}
      <footer className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-6 text-center text-xs text-gray-500 relative z-10">
        © {new Date().getFullYear()} Abilia Venegas · Desarrolladora Web & Automatización con IA
      </footer>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Mail, Phone, CheckCircle2, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenSchedule: () => void;
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenSchedule,
  prefilledMessage = ''
}) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState(prefilledMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledMessage) {
      setMensaje(prefilledMessage);
    }
  }, [prefilledMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
      setErrorMsg('Por favor completa los 3 campos.');
      return;
    }

    if (!correo.includes('@') || !correo.includes('.')) {
      setErrorMsg('Por favor introduce un correo electrónico válido.');
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/abiliavblossom@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: nombre.trim(),
          Correo: correo.trim(),
          Mensaje: mensaje.trim(),
          _subject: `✉️ Nuevo Mensaje desde Portafolio: ${nombre.trim()}`,
          _template: 'table',
          _autoresponse: `Hola ${nombre.trim()},\n\nGracias por escribirme. He recibido tu mensaje y te responderé en menos de 24 horas con toda la información solicitada.\n\nTu mensaje:\n"${mensaje.trim()}"\n\nSaludos cordiales,\nAbilia Venegas · Ingeniera en Informática & Full Stack\nWhatsApp: ${CONTACT_INFO.phoneDisplay}`
        })
      });
    } catch (err) {
      console.warn('FormSubmit contact notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const currentWhatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(
    mensaje.trim() ? mensaje : 'Hola Abilia, quiero cotizar un proyecto.'
  )}`;

  return (
    <section id="contacto" className="py-14 lg:py-20 bg-[#141414] text-white relative overflow-hidden">
      {/* Decorative ambient aura */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-t from-[#2DD4BF]/10 via-[#F8C8D8]/5 to-transparent blur-3xl pointer-events-none" 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-[540px] mb-8 text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#F8C8D8] mb-1 block">
            Contacto
          </span>
          <h2 className="font-display text-[26px] sm:text-[34px] font-bold text-white tracking-tight leading-tight">
            Hablemos de tu proyecto
          </h2>
          <p className="text-[14px] text-gray-300 mt-1">
            Escríbeme directamente. Respondo en menos de 24 horas y la primera consulta no tiene costo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Direct Action Cards with Lift */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* WhatsApp Card */}
            <div className="card-hover-fx p-5 rounded-2xl bg-[#241C23] border border-[#3E2D3B] hover:border-emerald-500/80 shadow-md group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-bold text-white">
                    WhatsApp directo
                  </h3>
                  <span className="text-xs text-[#2DD4BF] font-bold">Respuesta rápida</span>
                </div>
              </div>

              <p className="text-xs text-gray-300 mb-3.5 leading-relaxed">
                Mensaje rápido para cotizaciones o dudas técnicas.
              </p>

              <a
                href={currentWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer w-full bg-[#25D366] hover:bg-[#1EBE5D] text-[#0A2612] font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Escríbeme por WhatsApp</span>
              </a>
            </div>

            {/* Schedule Call Card */}
            <div className="card-hover-fx p-5 rounded-2xl bg-[#241C23] border border-[#3E2D3B] hover:border-[#2DD4BF] shadow-md group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#352331] text-[#F8C8D8] group-hover:text-[#2DD4BF] border border-[#F8C8D8]/20 group-hover:border-[#2DD4BF]/40 flex items-center justify-center transition-all duration-300">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-bold text-white">
                    Llamada de 15 minutos
                  </h3>
                  <span className="text-xs text-gray-400">Google Meet · Sin costo</span>
                </div>
              </div>

              <p className="text-xs text-gray-300 mb-3.5 leading-relaxed">
                Elige día y hora para revisar tu necesidad.
              </p>

              <button
                onClick={onOpenSchedule}
                className="btn-shimmer w-full bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] font-bold text-xs py-2.5 px-4 rounded-xl border border-[#F0B8C9] flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#8E2E4B]" />
                <span>Agendar en el calendario</span>
              </button>
            </div>

            {/* Contact Links */}
            <div className="pt-2 border-t border-white/10 space-y-1 text-xs text-gray-300">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 hover:text-[#2DD4BF] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F8C8D8]" />
                <span>{CONTACT_INFO.email}</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 hover:text-[#2DD4BF] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F8C8D8]" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Form with Glowing Focus States */}
          <div className="card-hover-fx lg:col-span-7 bg-[#241C23] p-5 sm:p-6 rounded-2xl border border-[#3E2D3B] hover:border-[#2DD4BF]/50 shadow-xl text-left">
            <h3 className="font-display text-[17px] font-bold text-white mb-0.5">
              Envía un mensaje
            </h3>
            <p className="text-xs text-gray-300 mb-3.5">
              Completa los 3 campos y te responderé en breve.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in fade-in zoom-in-95 duration-200">
                <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2.5 animate-bounce">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-base font-bold text-white mb-1">
                  ¡Mensaje recibido!
                </h4>
                <p className="text-xs text-emerald-200 max-w-sm mx-auto leading-relaxed mb-4">
                  Gracias <strong>{nombre}</strong>. Te responderé a <strong>{correo}</strong> lo antes posible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setNombre('');
                    setCorreo('');
                    setMensaje('');
                  }}
                  className="text-xs font-bold text-[#F8C8D8] hover:underline cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {errorMsg && (
                  <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label htmlFor="nombre" className="block text-[10.5px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Tu nombre o institución *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Laura Méndez"
                    required
                    className="w-full bg-[#1A141A] border border-[#3E2D3B] rounded-xl px-3 py-2 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF]/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="correo" className="block text-[10.5px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    id="correo"
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="laura@empresa.com"
                    required
                    className="w-full bg-[#1A141A] border border-[#3E2D3B] rounded-xl px-3 py-2 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF]/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-[10.5px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                    ¿En qué te ayudo? *
                  </label>
                  <textarea
                    id="mensaje"
                    rows={3}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Cuéntame brevemente sobre tu proyecto o plataforma."
                    required
                    className="w-full bg-[#1A141A] border border-[#3E2D3B] rounded-xl px-3 py-2 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF]/40 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-shimmer w-full bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] border border-[#F0B8C9] font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer disabled:opacity-60 active:scale-95"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#8E2E4B]" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

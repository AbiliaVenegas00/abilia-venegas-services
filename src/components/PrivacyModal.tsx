import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#161922] rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-[#282D3B] text-left my-8 animate-in zoom-in-95 duration-150 text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#262B38] mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#241A22] text-[#F8C8D8] border border-[#F8C8D8]/20 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-[17px] font-bold text-white">
                Aviso de Privacidad
              </h3>
              <p className="text-xs text-gray-400">
                Abilia Venegas · Irapuato, Gto. & Remoto
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3.5 text-xs text-gray-300 max-h-[55vh] overflow-y-auto pr-2 leading-relaxed">
          <p>
            En cumplimiento con la normativa en materia de Protección de Datos Personales, <strong>Abilia Venegas</strong>, con canales de contacto en <strong>{CONTACT_INFO.email}</strong> y <strong>{CONTACT_INFO.phoneDisplay}</strong>, hace constar su compromiso con la confidencialidad de la información proporcionada.
          </p>

          <h4 className="font-display text-xs font-bold text-[#F8C8D8] uppercase tracking-wider">
            1. Datos recabados y finalidad
          </h4>
          <p>
            Los datos solicitados a través de formularios o WhatsApp (nombre, correo, teléfono y descripción del proyecto) se utilizan exclusivamente para dar seguimiento a cotizaciones técnicas, reuniones de planeación y entrega de servicios pactados.
          </p>

          <h4 className="font-display text-xs font-bold text-[#F8C8D8] uppercase tracking-wider">
            2. Confidencialidad total
          </h4>
          <p>
            Tus datos y claves de acceso de servidores nunca son comercializados ni compartidos. Se implementan acuerdos de confidencialidad (NDA) para proteger código, bases de datos y propiedad intelectual.
          </p>

          <h4 className="font-display text-xs font-bold text-[#F8C8D8] uppercase tracking-wider">
            3. Derechos ARCO
          </h4>
          <p>
            Puedes acceder, rectificar o cancelar tus datos personales en cualquier momento escribiendo a <strong>{CONTACT_INFO.email}</strong>.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3.5 border-t border-[#262B38] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] px-5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs"
          >
            Aceptar y cerrar
          </button>
        </div>

      </div>
    </div>
  );
};

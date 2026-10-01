import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Video, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Sitio Web a la medida');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const days = [
    { label: 'Mañana', date: 'Jueves 1 Octubre' },
    { label: 'Viernes', date: 'Viernes 2 Octubre' },
    { label: 'Lunes', date: 'Lunes 5 Octubre' },
    { label: 'Martes', date: 'Martes 6 Octubre' },
    { label: 'Miércoles', date: 'Miércoles 7 Octubre' }
  ];

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '01:00 PM', '03:30 PM', '04:30 PM', '05:30 PM'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#161922] rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#282D3B] text-left my-8 animate-in zoom-in-95 duration-150 text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#262B38] mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#241A22] text-[#F8C8D8] border border-[#F8C8D8]/20 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-[17px] font-bold text-white">
                Agenda una llamada de 15 minutos
              </h3>
              <p className="text-xs text-gray-400">
                Sin costo ni compromiso · Vía Google Meet
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

        {booked ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-950 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display text-lg font-bold text-white mb-1.5">
              ¡Cita agendada con éxito!
            </h4>
            <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed mb-5">
              Enlace de Google Meet enviado a <strong>{email}</strong> para el <strong>{days[selectedDay].date} a las {selectedTime}</strong>.
            </p>

            <div className="bg-[#1C202B] p-3.5 rounded-xl text-left border border-[#282D3B] mb-5 text-xs text-gray-200 space-y-2">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#F8C8D8]" />
                <span>Reunión virtual: <strong>Google Meet</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F8C8D8]" />
                <span>Duración: <strong>15 minutos</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#F8C8D8]" />
                <span>Contacto directo: <strong>{CONTACT_INFO.phoneDisplay}</strong></span>
              </div>
            </div>

            <button
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] border border-[#F0B8C9] px-6 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
            >
              Cerrar y volver
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            {/* Step 1: Select Day */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                1. Selecciona una fecha
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {days.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDay(idx)}
                    className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedDay === idx
                        ? 'border-[#F8C8D8] bg-[#241A22] text-[#F8C8D8] font-bold ring-1 ring-[#F8C8D8]'
                        : 'border-[#262B38] bg-[#1A1D26] hover:border-[#353D4E] text-gray-300'
                    }`}
                  >
                    <span className="block text-[10px] uppercase tracking-wider text-gray-400">{item.label}</span>
                    <span className="block text-xs font-semibold text-white mt-0.5">{item.date}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Time */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                2. Selecciona un horario
              </label>
              <div className="flex flex-wrap gap-1.5">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-1 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedTime === time
                        ? 'bg-[#F8C8D8] text-[#14171E] border border-[#F0B8C9] shadow-xs'
                        : 'bg-[#1F232F] hover:bg-[#282D3B] text-gray-300 border border-[#2D3342]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="space-y-2.5 pt-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300">
                3. Tus datos de contacto
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  placeholder="Tu nombre completo *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#1A1D26] border border-[#2D3342] rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F8C8D8]"
                />

                <input
                  type="email"
                  placeholder="Correo electrónico *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#1A1D26] border border-[#2D3342] rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F8C8D8]"
                />
              </div>

              <div>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-[#1A1D26] border border-[#2D3342] rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-[#F8C8D8]"
                >
                  <option value="Sitio Web a la medida">Proyecto: Sitio Web o Plataforma a medida</option>
                  <option value="Branding Builder">Proyecto: Branding Builder / Generador Visual</option>
                  <option value="Generador de Contenidos IA">Proyecto: Generador de Contenidos con IA</option>
                  <option value="Data Visualization Dashboard">Proyecto: Data Visualization Dashboard</option>
                  <option value="CRM Calendar Task">Proyecto: CRM Calendar Task</option>
                  <option value="Plataformas Moodle LMS">Proyecto: Plataforma Educativa Moodle</option>
                  <option value="Infraestructura y Seguridad">Proyecto: Ciberseguridad & Servidores TI</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-3 bg-[#F8C8D8] hover:bg-[#F2B4C7] text-[#14171E] border border-[#F0B8C9] font-bold text-xs py-3 px-4 rounded-xl shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Confirmar videollamada ({days[selectedDay].date} · {selectedTime})</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#14171E]" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

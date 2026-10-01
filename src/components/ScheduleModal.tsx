import React, { useState, useMemo } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Video, ArrowRight, MessageCircle, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DayOption {
  label: string;
  date: string;
  fullDate: Date;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Sitio Web o Plataforma a medida');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [booked, setBooked] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Genera dinámicamente los próximos días hábiles (Lunes a Viernes)
  const days: DayOption[] = useMemo(() => {
    const dates: DayOption[] = [];
    const now = new Date();
    let dayOffset = 1;
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    while (dates.length < 5) {
      const d = new Date(now);
      d.setDate(now.getDate() + dayOffset);
      const dayOfWeek = d.getDay();
      // Solo días hábiles (Lunes a Viernes)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const label = dates.length === 0 ? 'Próximo hábil' : dayNames[dayOfWeek];
        const dateText = `${dayNames[dayOfWeek]} ${d.getDate()} ${monthNames[d.getMonth()]}`;
        dates.push({
          label,
          date: dateText,
          fullDate: d
        });
      }
      dayOffset++;
    }
    return dates;
  }, []);

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '01:00 PM', '03:30 PM', '04:30 PM', '05:30 PM'
  ];

  if (!isOpen) return null;

  // Generar enlace directo para Google Calendar con Google Meet
  const createGoogleCalendarLink = () => {
    const selectedDate = days[selectedDay]?.fullDate || new Date();
    const [time, period] = selectedTime.split(' ');
    const [hoursStr, minutesStr] = time.split(':');
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    const startDate = new Date(selectedDate);
    startDate.setHours(hours, minutes, 0, 0);

    const endDate = new Date(startDate);
    endDate.setMinutes(startDate.getMinutes() + 15);

    const pad = (n: number) => String(n).padStart(2, '0');
    const formatGCal = (d: Date) =>
      `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

    const datesParam = `${formatGCal(startDate)}/${formatGCal(endDate)}`;
    const title = encodeURIComponent(`Llamada de Diagnóstico & Asesoría: Abilia Venegas x ${name || 'Cliente'}`);
    const details = encodeURIComponent(
      `Reunión virtual de diagnóstico y asesoría gratuita (15 minutos).\n\n` +
      `🎯 Proyecto: ${topic}\n` +
      `👤 Cliente: ${name}\n` +
      `📧 Correo: ${email}\n` +
      `📱 Teléfono: ${phone || 'No especificado'}\n` +
      `👩‍💻 Desarrolladora: Abilia Venegas (Ingeniera en Informática)\n\n` +
      `💬 WhatsApp directo: ${CONTACT_INFO.phoneDisplay}\n` +
      `Videollamada vía Google Meet.`
    );
    const location = encodeURIComponent('Google Meet');
    const add = encodeURIComponent('abiliavblossom@gmail.com');

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${datesParam}&details=${details}&location=${location}&add=${add}`;
  };

  // Descarga de archivo .ics para Outlook / Apple Calendar
  const downloadIcsFile = () => {
    const selectedDate = days[selectedDay]?.fullDate || new Date();
    const [time, period] = selectedTime.split(' ');
    const [hoursStr, minutesStr] = time.split(':');
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    const startDate = new Date(selectedDate);
    startDate.setHours(hours, minutes, 0, 0);
    const endDate = new Date(startDate);
    endDate.setMinutes(startDate.getMinutes() + 15);

    const pad = (n: number) => String(n).padStart(2, '0');
    const formatIcs = (d: Date) =>
      `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Abilia Venegas//Portafolio//ES',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@abiliavenegas.dev`,
      `DTSTAMP:${formatIcs(new Date())}`,
      `DTSTART:${formatIcs(startDate)}`,
      `DTEND:${formatIcs(endDate)}`,
      `SUMMARY:Llamada de Diagnóstico & Asesoría: Abilia Venegas x ${name || 'Cliente'}`,
      `DESCRIPTION:Diagnóstico gratuito de 15 min para ${topic}. Contacto: +52 462 245 0193`,
      'LOCATION:Google Meet',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'cita-abilia-venegas.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const whatsappBookingUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(
    `Hola Abilia, acabo de agendar una llamada y diagnóstico gratuito de 15 min:\n\n` +
    `👤 Nombre: ${name}\n` +
    `📧 Correo: ${email}\n` +
    `📱 Teléfono: ${phone || 'No especificado'}\n` +
    `📅 Fecha: ${days[selectedDay]?.date}\n` +
    `⏰ Horario: ${selectedTime}\n` +
    `🎯 Proyecto: ${topic}\n\n` +
    `¡Quedo a la espera de la confirmación!`
  )}`;

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setStatusMessage('Enviando solicitud y registrando cita...');

    const chosenDay = days[selectedDay]?.date || 'Fecha por confirmar';

    try {
      const payload = {
        Nombre: name.trim(),
        Correo: email.trim(),
        Telefono: phone.trim() || 'No especificado',
        Fecha: chosenDay,
        Horario: selectedTime,
        Proyecto: topic,
        _subject: `📅 Nueva Videollamada Agendada: ${name.trim()} (${chosenDay} · ${selectedTime})`,
        _template: 'table',
        _autoresponse: `Hola ${name.trim()},\n\nTu llamada gratuita de diagnóstico y asesoría de 15 minutos con Abilia Venegas ha sido registrada con éxito:\n\n📅 Fecha: ${chosenDay}\n⏰ Horario: ${selectedTime}\n🎯 Tema: ${topic}\n\nNos conectaremos vía Google Meet o te contactaremos al teléfono/correo proporcionado.\n\nSi deseas contactarme antes o enviar detalles adicionales, puedes escribirme directamente al WhatsApp: ${CONTACT_INFO.phoneDisplay}.\n\n¡Hablamos pronto!\nAbilia Venegas · Ingeniera en Informática & Full Stack`
      };

      await fetch('https://formsubmit.co/ajax/abiliavblossom@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('FormSubmit request notice:', err);
    } finally {
      setIsSubmitting(false);
      setBooked(true);
    }
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
                Llamada y Diagnóstico Gratuito (15 min)
              </h3>
              <p className="text-xs text-[#2DD4BF] font-semibold">
                Auditoría y asesoría 100% gratuita · Sin compromiso · Vía Google Meet
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
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-emerald-950 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display text-lg font-bold text-white mb-1.5">
              ¡Cita registrada con éxito!
            </h4>
            <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed mb-4">
              Hemos enviado la notificación a <strong>abiliavblossom@gmail.com</strong> y a tu correo <strong>{email}</strong> para el <strong>{days[selectedDay]?.date} a las {selectedTime}</strong>.
            </p>

            <div className="bg-[#1C202B] p-3.5 rounded-xl text-left border border-[#282D3B] mb-4 text-xs text-gray-200 space-y-2">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#2DD4BF]" />
                <span>Modalidad: <strong>Google Meet / Videollamada (15 min)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F8C8D8]" />
                <span>Horario: <strong>{days[selectedDay]?.date} · {selectedTime}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#EAB308]" />
                <span>Contacto directo: <strong>{CONTACT_INFO.phoneDisplay}</strong></span>
              </div>
            </div>

            {/* Acciones directas para garantizar la agenda en calendarios */}
            <div className="space-y-2 mb-4 text-left">
              <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                Agrega a tu agenda o confirma al instante:
              </span>
              
              <a
                href={createGoogleCalendarLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#2DD4BF] hover:bg-[#14B8A6] text-[#0A201C] font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>📅 Agregar a mi Google Calendar (1 Clic)</span>
              </a>

              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>💬 Confirmar también por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={downloadIcsFile}
                className="w-full bg-[#1A1D26] hover:bg-[#242936] text-gray-300 border border-[#2D3342] font-semibold py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Clock className="w-3.5 h-3.5 text-[#F8C8D8]" />
                <span>Descargar archivo de Calendario (.ics para Apple / Outlook)</span>
              </button>
            </div>

            <button
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="bg-[#241C23] hover:bg-[#322731] text-gray-300 border border-[#3E2D3B] px-6 py-2 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            {/* Step 1: Select Day */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                1. Selecciona una fecha hábil
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {days.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDay(idx)}
                    className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedDay === idx
                        ? 'border-[#2DD4BF] bg-[#0E2924] text-[#2DD4BF] font-bold ring-1 ring-[#2DD4BF]'
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
                        ? 'bg-[#2DD4BF] text-[#0A201C] font-bold shadow-xs'
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
                  disabled={isSubmitting}
                  className="w-full bg-[#1A1D26] border border-[#2D3342] rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#2DD4BF]"
                />

                <input
                  type="email"
                  placeholder="Correo electrónico *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#1A1D26] border border-[#2D3342] rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#2DD4BF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="tel"
                  placeholder="WhatsApp / Teléfono (opcional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-[#1A1D26] border border-[#2D3342] rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#2DD4BF]"
                />

                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-[#1A1D26] border border-[#2D3342] rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-[#2DD4BF]"
                >
                  <option value="Sitio Web o Plataforma a medida">Proyecto: Sitio Web o Plataforma a medida</option>
                  <option value="Automatización con IA">Proyecto: Automatización con IA</option>
                  <option value="Plataformas Moodle LMS">Proyecto: Plataforma Moodle LMS</option>
                  <option value="Servidores & Ciberseguridad TI">Proyecto: Servidores & Ciberseguridad TI</option>
                  <option value="Auditoría y Diagnóstico General">Auditoría y Diagnóstico General</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-3 bg-[#2DD4BF] hover:bg-[#14B8A6] text-[#0A201C] font-extrabold text-xs py-3 px-4 rounded-xl shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#0A201C]" />
                  <span>Enviando confirmación y registrando cita...</span>
                </>
              ) : (
                <>
                  <span>Confirmar videollamada ({days[selectedDay]?.date} · {selectedTime})</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0A201C]" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

import React from 'react';
import { Award, CheckCircle, Globe2, MessageSquare } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Award,
      text: 'Ingeniería en Informática',
      sub: 'Especialista Full Stack, TI & IA'
    },
    {
      icon: CheckCircle,
      text: 'Certificaciones Oficiales',
      sub: 'Acreditada por Google & Cisco'
    },
    {
      icon: Globe2,
      text: 'Web & Plataformas a Medida',
      sub: 'Arquitectura moderna y Moodle'
    },
    {
      icon: MessageSquare,
      text: 'Comunicación Directa',
      sub: 'Trato profesional sin intermediarios'
    }
  ];

  const metrics = [
    { value: '18+', label: 'Proyectos completados' },
    { value: '1,500+', label: 'Usuarios atendidos' },
    { value: '99.9%', label: 'Disponibilidad de servidores' },
    { value: '< 24h', label: 'Tiempo de respuesta' }
  ];

  return (
    <div className="bg-[#1F1F1F] text-white border-y border-[#333333] py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* 4 Points in Interactive Plum Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-hover-fx flex items-center gap-3 p-3.5 rounded-xl bg-[#282127] border border-[#3F323D] hover:border-[#2DD4BF]/60 text-left group cursor-default"
              >
                <div className="p-2 rounded-xl shrink-0 bg-[#382933] text-[#F8C8D8] group-hover:text-[#2DD4BF] group-hover:scale-110 border border-[#F8C8D8]/20 group-hover:border-[#2DD4BF]/30 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[13.5px] font-bold text-white group-hover:text-white leading-tight transition-colors">
                    {item.text}
                  </p>
                  <p className="text-[11.5px] text-gray-300 mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics Row with Smooth Hover Lift */}
        <div className="pt-6 border-t border-[#333333] grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {metrics.map((metric, i) => (
            <div 
              key={i} 
              className="card-hover-fx p-3 rounded-xl bg-[#282127]/80 border border-[#3F323D] hover:border-[#2DD4BF]/60 group cursor-default"
            >
              <div className="font-display text-2xl font-bold text-[#F8C8D8] group-hover:text-[#2DD4BF] tracking-tight transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-gray-200 mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

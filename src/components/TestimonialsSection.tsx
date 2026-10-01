import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#1F1F1F] text-white border-b border-[#2C2C2C] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-[540px] mb-8 text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#F8C8D8] mb-1 block">
            Testimonios
          </span>
          <h2 className="font-display text-[26px] sm:text-[32px] font-bold text-white tracking-tight leading-tight">
            Lo que dicen de mi trabajo
          </h2>
        </div>

        {/* 3 Cards with Lift & Glow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="card-hover-fx bg-[#241C23] rounded-2xl p-5 border border-[#3E2D3B] shadow-md flex flex-col justify-between hover:border-[#2DD4BF] group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* Quote Icon with Hover Rotate */}
                  <div className="w-8 h-8 rounded-xl bg-[#0E2924] text-[#2DD4BF] border border-[#175248] flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <Quote className="w-3.5 h-3.5 fill-[#2DD4BF]" />
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 40}ms` }} />
                    ))}
                  </div>
                </div>

                <p className="text-[13px] text-gray-200 leading-[1.55] italic mb-4">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-3 border-t border-[#382635]">
                <div className="flex items-center gap-3 mb-1.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover object-top border-2 border-[#2DD4BF]/50 group-hover:border-[#2DD4BF] shadow-xs transition-colors shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback in case of local load issue
                      const target = e.currentTarget;
                      if (!target.src.includes('unsplash')) {
                        target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80';
                      }
                    }}
                  />
                  <div>
                    <h4 className="font-display text-[13.5px] font-bold text-white leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-300 mt-0.5">
                      {item.role}, <span className="font-bold text-[#2DD4BF]">{item.company}</span>
                    </p>
                  </div>
                </div>

                {/* Direct Supervisor Verification Badge if present */}
                {item.relationship && (
                  <div className="mt-1 pl-13">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#F8C8D8] bg-[#382933] border border-[#F8C8D8]/20 px-2 py-0.5 rounded-md">
                      <CheckCircle className="w-2.5 h-2.5 text-[#2DD4BF]" />
                      <span>{item.relationship}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

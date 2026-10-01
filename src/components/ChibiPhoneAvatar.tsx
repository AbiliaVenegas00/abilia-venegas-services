import React, { useState } from 'react';
import { MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ChibiPhoneAvatarProps {
  onScrollToContact?: () => void;
}

export const ChibiPhoneAvatar: React.FC<ChibiPhoneAvatarProps> = ({ onScrollToContact }) => {
  const [bubbleTextIndex, setBubbleTextIndex] = useState(0);

  const bubbleMessages = [
    '¡Hola! ¿Tienes dudas con tu sitio, servidor o Moodle? ¡Aquí te respondo!',
    '¡Trato 100% directo conmigo, sin intermediarios ni rodeos técnicos!',
    '¿Una llamada de 15 minutos sin costo? ¡Escríbeme y lo coordinamos!',
  ];

  const handleNextBubble = () => {
    setBubbleTextIndex((prev) => (prev + 1) % bubbleMessages.length);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F3EFF5]/80 to-[#ECE6EF]/60 rounded-3xl border border-[#E2D8E6] shadow-sm relative overflow-hidden group">
      
      {/* Background Soft Pastel Aura */}
      <div 
        aria-hidden="true" 
        className="absolute -top-10 -right-10 w-48 h-48 bg-[#F8C8D8]/40 rounded-full blur-2xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#2DD4BF]/20 rounded-full blur-2xl pointer-events-none" 
      />

      {/* Floating Status Pill */}
      <div className="mb-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#E0D3E3] shadow-2xs">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2DD4BF]" />
        </span>
        <span className="text-[11.5px] font-bold text-[#14171E] flex items-center gap-1">
          <PhoneCall className="w-3 h-3 text-[#A83B5E] animate-bounce" />
          <span>Línea directa con Abilia</span>
        </span>
      </div>

      {/* Interactive Speech Bubble */}
      <div 
        onClick={handleNextBubble}
        className="relative bg-white text-[#14171E] p-3.5 rounded-2xl border border-[#E0D3E3] shadow-md max-w-[280px] mb-2 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:border-[#2DD4BF]"
        title="Toca para cambiar mensaje"
      >
        <p className="text-[12.5px] font-medium leading-snug text-[#2C212A]">
          “{bubbleMessages[bubbleTextIndex]}”
        </p>
        <div className="mt-1.5 flex items-center justify-between text-[10px] text-gray-600 font-semibold">
          <span className="text-[#A83B5E] flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-[#2DD4BF]" /> Toca para otro tip
          </span>
          <span>{bubbleTextIndex + 1}/{bubbleMessages.length}</span>
        </div>

        {/* Speech Bubble Tail */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-[#E0D3E3] transform rotate-45" />
      </div>

      {/* Chibi Anime Avatar Container */}
      <div className="relative w-[210px] h-[220px] flex items-center justify-center animate-chibi-float my-1">
        
        {/* SVG Chibi Illustration */}
        <svg
          viewBox="0 0 240 250"
          className="w-full h-full drop-shadow-md select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Skin Tone Gradient */}
            <linearGradient id="chibiSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FDEDDF" />
              <stop offset="100%" stopColor="#F9DFCD" />
            </linearGradient>

            {/* Hair Gradient */}
            <linearGradient id="chibiHair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#31232E" />
              <stop offset="60%" stopColor="#251B23" />
              <stop offset="100%" stopColor="#1B1419" />
            </linearGradient>

            {/* Hair Highlight */}
            <linearGradient id="chibiHairGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#A83B5E" stopOpacity="0" />
              <stop offset="50%" stopColor="#F8C8D8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A83B5E" stopOpacity="0" />
            </linearGradient>

            {/* Outfit Gradient */}
            <linearGradient id="chibiSuit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A1F28" />
              <stop offset="100%" stopColor="#1F171E" />
            </linearGradient>

            {/* Phone Gradient */}
            <linearGradient id="chibiPhone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#0F766E" />
            </linearGradient>
          </defs>

          {/* Back Hair */}
          <ellipse cx="120" cy="115" rx="66" ry="60" fill="url(#chibiHair)" />
          {/* Hair strands left & right falling */}
          <path d="M 60 115 Q 52 165 72 185 Q 78 150 78 120 Z" fill="url(#chibiHair)" />
          <path d="M 180 115 Q 188 165 168 185 Q 162 150 162 120 Z" fill="url(#chibiHair)" />

          {/* Chibi Body / Clothes */}
          <g>
            {/* Shoulders / Torso */}
            <path
              d="M 80 185 Q 120 180 160 185 L 175 240 Q 120 248 65 240 Z"
              fill="url(#chibiSuit)"
            />
            {/* White / Pastel inner shirt collar */}
            <polygon points="120,185 105,210 135,210" fill="#FFFFFF" />
            <polygon points="120,205 110,230 130,230" fill="#F8C8D8" />
            {/* Lapels */}
            <path d="M 95 185 L 112 215 L 102 218 L 86 195 Z" fill="#3D2B39" />
            <path d="M 145 185 L 128 215 L 138 218 L 154 195 Z" fill="#3D2B39" />
            
            {/* Left Arm / Hand Resting or Gesturing */}
            <path
              d="M 76 195 Q 60 215 78 232 Q 88 228 85 210 Z"
              fill="url(#chibiSuit)"
            />
            {/* Left Hand cute chibi thumb */}
            <ellipse cx="78" cy="232" rx="7" ry="6" fill="url(#chibiSkin)" />
          </g>

          {/* Neck */}
          <rect x="110" y="160" width="20" height="25" rx="5" fill="url(#chibiSkin)" />

          {/* Chibi Head */}
          <ellipse cx="120" cy="115" rx="54" ry="48" fill="url(#chibiSkin)" />

          {/* Blushing Cheeks */}
          <ellipse cx="88" cy="128" rx="10" ry="6" fill="#F8C8D8" opacity="0.8" />
          <ellipse cx="152" cy="128" rx="10" ry="6" fill="#F8C8D8" opacity="0.8" />
          {/* Cute blush hatch marks */}
          <line x1="84" y1="126" x2="88" y2="130" stroke="#E286A5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="89" y1="126" x2="93" y2="130" stroke="#E286A5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="148" y1="126" x2="152" y2="130" stroke="#E286A5" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="153" y1="126" x2="157" y2="130" stroke="#E286A5" strokeWidth="1.2" strokeLinecap="round" />

          {/* Anime Eyes with Blinking */}
          <g className="animate-eye-blink">
            {/* Left Eye */}
            <ellipse cx="94" cy="116" rx="8.5" ry="12" fill="#251722" />
            <ellipse cx="95" cy="117" rx="7" ry="10" fill="#3D1D30" />
            {/* Sparkle reflections */}
            <circle cx="92" cy="112" r="3.5" fill="#FFFFFF" />
            <circle cx="96" cy="122" r="1.6" fill="#FFFFFF" />
            {/* Eyelash */}
            <path d="M 83 111 Q 93 103 103 109" stroke="#1F151D" strokeWidth="2.4" fill="none" strokeLinecap="round" />

            {/* Right Eye */}
            <ellipse cx="146" cy="116" rx="8.5" ry="12" fill="#251722" />
            <ellipse cx="145" cy="117" rx="7" ry="10" fill="#3D1D30" />
            {/* Sparkle reflections */}
            <circle cx="144" cy="112" r="3.5" fill="#FFFFFF" />
            <circle cx="148" cy="122" r="1.6" fill="#FFFFFF" />
            {/* Eyelash */}
            <path d="M 137 109 Q 147 103 157 111" stroke="#1F151D" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          </g>

          {/* Eyebrows */}
          <path d="M 85 99 Q 94 95 102 98" stroke="#31232E" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M 138 98 Q 146 95 155 99" stroke="#31232E" strokeWidth="1.8" fill="none" strokeLinecap="round" />

          {/* Glasses Frame (Stylish chic frames) */}
          <g>
            {/* Left lens */}
            <rect
              x="81"
              y="103"
              width="26"
              height="24"
              rx="7"
              fill="rgba(255,255,255,0.25)"
              stroke="#A83B5E"
              strokeWidth="2"
            />
            {/* Right lens */}
            <rect
              x="133"
              y="103"
              width="26"
              height="24"
              rx="7"
              fill="rgba(255,255,255,0.25)"
              stroke="#A83B5E"
              strokeWidth="2"
            />
            {/* Bridge */}
            <path d="M 107 113 Q 120 110 133 113" stroke="#A83B5E" strokeWidth="2" fill="none" />
            {/* Glass glint reflection */}
            <line x1="84" y1="106" x2="93" y2="106" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
            <line x1="136" y1="106" x2="145" y2="106" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
          </g>

          {/* Cute Nose */}
          <circle cx="120" cy="124" r="1.2" fill="#DFA18B" />

          {/* Animated Talking Mouth */}
          <g className="animate-mouth-talk">
            <path
              d="M 114 135 Q 120 142 126 135 Z"
              fill="#D44970"
              stroke="#A83B5E"
              strokeWidth="1.2"
            />
            {/* Tiny tongue */}
            <path d="M 117 138 Q 120 137 123 138 Z" fill="#F8C8D8" />
          </g>

          {/* Front Hair / Bangs */}
          <g>
            {/* Hair base top */}
            <path
              d="M 64 105 Q 120 50 176 105 Q 165 80 120 78 Q 75 80 64 105 Z"
              fill="url(#chibiHair)"
            />
            {/* Soft hair shine band */}
            <ellipse cx="120" cy="88" rx="44" ry="7" fill="url(#chibiHairGlow)" />
            {/* Bang strands */}
            <path d="M 72 95 Q 92 110 98 100 Q 86 85 72 95 Z" fill="url(#chibiHair)" />
            <path d="M 94 92 Q 118 108 126 95 Q 112 80 94 92 Z" fill="url(#chibiHair)" />
            <path d="M 124 95 Q 146 108 156 94 Q 142 80 124 95 Z" fill="url(#chibiHair)" />
            <path d="M 152 95 Q 168 110 172 100 Q 162 86 152 95 Z" fill="url(#chibiHair)" />
          </g>

          {/* Right Arm & Phone Answering Animation */}
          <g className="animate-phone-tilt">
            {/* Arm reaching up to ear */}
            <path
              d="M 154 195 Q 186 190 182 145 Q 170 148 160 175 Z"
              fill="url(#chibiSuit)"
            />
            {/* Chibi Hand holding phone */}
            <ellipse cx="176" cy="138" rx="8" ry="7" fill="url(#chibiSkin)" />
            {/* Cute thumb over phone */}
            <path d="M 172 136 Q 168 140 174 144" stroke="#DFA18B" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Smartphone against ear */}
            <g transform="rotate(-15 180 130)">
              {/* Phone Body */}
              <rect
                x="170"
                y="108"
                width="20"
                height="38"
                rx="5"
                fill="url(#chibiPhone)"
                stroke="#0D5E58"
                strokeWidth="1.5"
              />
              {/* Phone Screen Glowing */}
              <rect
                x="172"
                y="112"
                width="16"
                height="30"
                rx="3"
                fill="#E6FFFA"
              />
              {/* Call active UI on screen */}
              <circle cx="180" cy="120" r="3" fill="#2DD4BF" />
              <rect x="175" y="126" width="10" height="2" rx="1" fill="#0D9488" />
              <rect x="176" y="130" width="8" height="2" rx="1" fill="#A0AEC0" />
            </g>

            {/* Calling Soundwaves Animated */}
            <g>
              {/* Wave 1 */}
              <path
                className="animate-call-wave-1"
                d="M 195 110 Q 204 122 195 134"
                stroke="#2DD4BF"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* Wave 2 */}
              <path
                className="animate-call-wave-2"
                d="M 203 104 Q 215 122 203 140"
                stroke="#0D9488"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* Wave 3 */}
              <path
                className="animate-call-wave-3"
                d="M 211 98 Q 226 122 211 146"
                stroke="#F8C8D8"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* Sparkles around Chibi */}
          <g>
            <path
              d="M 52 90 Q 56 94 56 98 Q 56 94 60 90 Q 56 86 56 82 Q 56 86 52 90 Z"
              fill="#2DD4BF"
              className="animate-pulse"
            />
            <path
              d="M 188 78 Q 191 81 191 84 Q 191 81 194 78 Q 191 75 191 72 Q 191 75 188 78 Z"
              fill="#F8C8D8"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </g>
        </svg>

      </div>

      {/* Direct Contact Button */}
      <div className="w-full mt-2 space-y-2">
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer w-full bg-[#25D366] hover:bg-[#1EBE5D] text-[#0A2612] font-bold text-xs py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>¡Mándame WhatsApp directo!</span>
        </a>

        {onScrollToContact && (
          <button
            onClick={onScrollToContact}
            className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-[#14171E] font-semibold text-[11.5px] py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
          >
            O déjame un mensaje en el formulario ↓
          </button>
        )}
      </div>

    </div>
  );
};

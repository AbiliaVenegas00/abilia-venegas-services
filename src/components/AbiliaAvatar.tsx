import React, { useState, useEffect } from 'react';

interface AbiliaAvatarProps {
  className?: string;
  size?: 'hero' | 'about';
  src?: string;
}

export const AbiliaAvatar: React.FC<AbiliaAvatarProps> = ({
  className = '',
  size = 'hero',
  src
}) => {
  const defaultSrc = src || (size === 'about' ? './devabilia.jpg' : './abilia.png');
  const [avatarSrc, setAvatarSrc] = useState<string>(defaultSrc);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (src) {
      setAvatarSrc(src);
      setHasError(false);
    } else {
      const saved = localStorage.getItem('abilia_avatar_custom');
      if (saved && size === 'hero') {
        setAvatarSrc(saved);
      } else {
        setAvatarSrc(size === 'about' ? './devabilia.jpg' : './abilia.png');
      }
      setHasError(false);
    }
  }, [src, size]);

  const heightClass = size === 'hero' ? 'h-[440px] sm:h-[480px]' : 'h-[360px] sm:h-[400px]';

  const handleImageError = () => {
    if (avatarSrc.startsWith('./')) {
      // Also attempt path without leading ./
      setAvatarSrc(avatarSrc.slice(2));
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {!hasError ? (
        <img
          src={avatarSrc}
          alt="Abilia Venegas - Ingeniera en Informática & Full Stack Developer"
          className={`w-full ${heightClass} object-cover object-top rounded-2xl shadow-md border border-[#2D3342] bg-[#161922]`}
          loading={size === 'hero' ? 'eager' : 'lazy'}
          onError={handleImageError}
        />
      ) : (
        <div className={`w-full ${heightClass} rounded-2xl border border-[#2D3342] bg-gradient-to-br from-[#241C23] via-[#1A141A] to-[#120E12] flex flex-col items-center justify-center p-6 text-center shadow-md`}>
          <div className="w-20 h-20 rounded-full bg-[#F8C8D8]/10 border border-[#F8C8D8]/30 flex items-center justify-center text-[#F8C8D8] text-2xl font-bold font-display mb-3">
            AV
          </div>
          <span className="font-display font-bold text-white text-lg">Abilia Venegas</span>
          <span className="text-xs text-[#2DD4BF] font-mono mt-1">Ingeniera en Informática</span>
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect } from 'react';

interface AbiliaAvatarProps {
  className?: string;
  size?: 'hero' | 'about';
}

export const AbiliaAvatar: React.FC<AbiliaAvatarProps> = ({
  className = '',
  size = 'hero'
}) => {
  const [avatarSrc, setAvatarSrc] = useState<string>('Gemini_Generated_Image_3n3t713n3t713n3t.png');

  useEffect(() => {
    const saved = localStorage.getItem('abilia_avatar_custom');
    if (saved) {
      setAvatarSrc(saved);
    }
  }, []);

  const heightClass = size === 'hero' ? 'h-[440px] sm:h-[480px]' : 'h-[360px] sm:h-[400px]';

  return (
    <div className={`relative w-full ${className}`}>
      <img
        src={avatarSrc}
        alt="Abilia Venegas - Ingeniera en Informática & Full Stack Developer"
        className={`w-full ${heightClass} object-cover object-top rounded-2xl shadow-md border border-[#2D3342] bg-[#161922]`}
        loading="eager"
      />
    </div>
  );
};

import React, { useState } from 'react';
import { User, Image as ImageIcon } from 'lucide-react';
import { imageConfig } from '../data/company';

const SafeImage = ({ src, alt, className = "", isAvatar = false, fallbackSrc, priority = false }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    setError(true);
  };

  const actualFallback = fallbackSrc || imageConfig.fallbackPlaceholder;

  if (error || !src) {
    if (isAvatar) {
      return (
        <div className={`bg-slate-100 flex items-center justify-center text-slate-400 ${className}`}>
          <User className="w-1/2 h-1/2" />
        </div>
      );
    }
    return (
      <div className={`bg-slate-100 flex flex-col items-center justify-center p-4 text-slate-400 ${className}`}>
        <ImageIcon className="w-8 h-8 mb-1 opacity-50" />
        <span className="text-xs font-medium text-slate-500">{alt || "Healthcare Image"}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || "Riddhi Siddhi Health Care"}
      className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={() => setLoaded(true)}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
};

export default SafeImage;

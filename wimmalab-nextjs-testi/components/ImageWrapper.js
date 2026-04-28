import Image from 'next/image';
import { useState } from 'react';

// Adds extra decoration to Next.js Image component
export function ImageWrapper({ className = '', ...props }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className={`image__wrapper ${className}`}>
      <Image
        {...props}
        className={`image__content fade-in ${isReady ? 'loaded' : ''}`}
        onLoad={() => setIsReady(true)}
      />
      <div className="image__bg"></div>
    </div>
  );
}

export default ImageWrapper;

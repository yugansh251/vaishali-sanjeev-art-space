import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  /** CSS aspect ratio for the reserved box, e.g. 16 / 9 */
  ratio?: number;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  onClick?: () => void;
}

/**
 * Image with a reserved aspect-ratio box, a cheap placeholder until decode,
 * and a <picture> wrapper with a WebP source when one is available.
 */
const SmartImage = ({
  src,
  alt,
  ratio = 16 / 9,
  width,
  height,
  className = '',
  imgClassName = 'object-contain',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  onClick,
}: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const webpSrc = /\.webp($|\?)/i.test(src) ? src : undefined;

  return (
    <div
      className={`relative w-full min-w-0 overflow-hidden bg-muted ${className}`}
      style={{ aspectRatio: `${ratio}`, boxSizing: 'border-box' }}
      onClick={onClick}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      </picture>
    </div>
  );
};

export default SmartImage;

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  index: number;
  caption?: string;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const Lightbox = ({ images, index, caption, onIndexChange, onClose }: LightboxProps) => {
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [loaded, setLoaded] = useState(false);
  const hasMultiple = images.length > 1;

  const go = useCallback(
    (dir: 'prev' | 'next') => {
      if (!hasMultiple) return;
      const next =
        dir === 'prev'
          ? (index - 1 + images.length) % images.length
          : (index + 1) % images.length;
      onIndexChange(next);
    },
    [index, images.length, hasMultiple, onIndexChange]
  );

  // Lock body scroll and restore scroll position on close
  useEffect(() => {
    const scrollY = window.scrollY;
    const body = document.body;
    const prev = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    return () => {
      body.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') go('prev');
      if (e.key === 'ArrowRight') go('next');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, onClose]);

  useEffect(() => {
    setLoaded(false);
  }, [index]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      go(dx > 0 ? 'prev' : 'next');
    }
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[100] flex flex-col bg-background"
      style={{ width: '100%', height: '100dvh', maxWidth: '100%' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute z-20 flex h-11 w-11 items-center justify-center rounded-full bg-foreground/70 text-background transition-colors hover:bg-foreground/85 focus:outline-none focus:ring-2 focus:ring-ring"
        style={{
          top: 'calc(env(safe-area-inset-top, 0px) + 0.75rem)',
          right: 'calc(env(safe-area-inset-right, 0px) + 0.75rem)',
        }}
      >
        <X className="h-5 w-5" />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={() => go('prev')}
            aria-label="Previous image"
            className="absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/70 text-background transition-colors hover:bg-foreground/85 focus:outline-none focus:ring-2 focus:ring-ring"
            style={{ left: 'calc(env(safe-area-inset-left, 0px) + 0.5rem)' }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => go('next')}
            aria-label="Next image"
            className="absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/70 text-background transition-colors hover:bg-foreground/85 focus:outline-none focus:ring-2 focus:ring-ring"
            style={{ right: 'calc(env(safe-area-inset-right, 0px) + 0.5rem)' }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Image area */}
      <div
        className="flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden p-3 sm:p-6"
        style={{
          paddingTop: 'calc(env(safe-area-inset-top, 0px) + 3.75rem)',
          paddingLeft: 'calc(env(safe-area-inset-left, 0px) + 0.75rem)',
          paddingRight: 'calc(env(safe-area-inset-right, 0px) + 0.75rem)',
        }}
      >
        <img
          key={images[index]}
          src={images[index]}
          alt={caption ? `${caption} — image ${index + 1} of ${images.length}` : `Image ${index + 1}`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setLoaded(true)}
          className={`object-contain transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
        />
      </div>

      {/* Caption */}
      {caption && (
        <div
          className="w-full max-w-full shrink-0 overflow-y-auto border-t border-border bg-background px-4 py-3 sm:px-6"
          style={{
            maxHeight: '25dvh',
            paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)',
            paddingLeft: 'calc(env(safe-area-inset-left, 0px) + 1rem)',
            paddingRight: 'calc(env(safe-area-inset-right, 0px) + 1rem)',
          }}
        >
          <p className="text-[0.9375rem] leading-[1.6] text-foreground sm:text-base">{caption}</p>
          {hasMultiple && (
            <p className="mt-1 text-sm leading-[1.6] text-muted-foreground">
              {index + 1} / {images.length}
            </p>
          )}
        </div>
      )}
    </div>,
    document.body
  );
};

export default Lightbox;

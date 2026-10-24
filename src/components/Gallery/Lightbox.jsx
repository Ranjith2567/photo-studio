import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORY_LABELS } from '../../data/gallery.js';

export default function Lightbox({ items, activeId, onClose, onNavigate }) {
  const index = items.findIndex((i) => i.id === activeId);
  const item = items[index];

  const goNext = useCallback(() => {
    if (index === -1) return;
    onNavigate(items[(index + 1) % items.length].id);
  }, [index, items, onNavigate]);

  const goPrev = useCallback(() => {
    if (index === -1) return;
    onNavigate(items[(index - 1 + items.length) % items.length].id);
  }, [index, items, onNavigate]);

  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 md:p-10"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-ivory/60 hover:text-gold transition-colors"
          >
            Close ✕
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 font-mono text-2xl text-ivory/40 hover:text-gold transition-colors px-3"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 font-mono text-2xl text-ivory/40 hover:text-gold transition-colors px-3"
          >
            ›
          </button>

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-4xl"
          >
            <img
              src={item.src}
              alt={item.title}
              className="max-h-[85vh] w-auto object-contain"
            />
            <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ivory/60">
              <span>{item.title} — {CATEGORY_LABELS[item.category]}</span>
              <span>ƒ/{item.aperture} · {item.shutter}s · ISO {item.iso} · {item.focal}mm</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

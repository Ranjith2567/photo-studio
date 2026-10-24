import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORY_LABELS } from '../../data/gallery.js';
import ExifTag from '../ui/ExifTag.jsx';

export default function GalleryGrid({ items, onOpen }) {
  return (
    <div className="columns-2 md:columns-3 gap-4 space-y-4">
      <AnimatePresence>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onOpen(item)}
            className="group relative block w-full overflow-hidden bg-panel mb-4 break-inside-avoid text-left"
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ExifTag
              category={CATEGORY_LABELS[item.category]}
              aperture={item.aperture}
              shutter={item.shutter}
              iso={item.iso}
              focal={item.focal}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-ivory/0 group-hover:text-ivory/70 transition-colors duration-500">
              {item.title}
            </div>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}

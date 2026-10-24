import { motion } from 'framer-motion';
import { CATEGORY_LABELS } from '../../data/gallery.js';

const FILTERS = Object.keys(CATEGORY_LABELS);

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {FILTERS.map((key) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`relative px-5 py-2.5 font-mono text-xs uppercase tracking-widest border transition-colors duration-400 ${
            active === key
              ? 'border-gold text-gold'
              : 'border-ivory/20 text-ivory/60 hover:border-ivory/50 hover:text-ivory'
          }`}
        >
          {active === key && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 border border-gold"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
          <span className="relative">{CATEGORY_LABELS[key]}</span>
        </button>
      ))}
    </div>
  );
}

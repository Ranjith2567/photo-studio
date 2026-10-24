import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/testimonials.js';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const current = TESTIMONIALS[index];

  return (
    <section className="relative section-pad py-24 md:py-32 border-t border-ivory/10 bg-panel/40">
      <p className="eyebrow mb-12 text-center">Client Notes</p>

      <div className="max-w-3xl mx-auto text-center min-h-[220px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-2xl md:text-3xl leading-relaxed text-ivory italic">
              "{current.quote}"
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <img
                src={current.image}
                alt={current.name}
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover border border-gold/40"
              />
              <div className="text-left">
                <p className="text-sm text-ivory">{current.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ivory/50">
                  {current.role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex justify-center gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial from ${t.name}`}
            className={`h-1.5 transition-all duration-500 ease-cinematic ${
              i === index ? 'w-8 bg-gold' : 'w-1.5 bg-ivory/25'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

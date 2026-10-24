import { useEffect, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HERO_VIDEOS } from '../../data/heroVideos.js';

export default function HeroVideoCycler() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const startRef = useRef(Date.now());
  const [progress, setProgress] = useState(0);

  const current = HERO_VIDEOS[active];

  const goTo = useCallback((index) => {
    setActive(index % HERO_VIDEOS.length);
    startRef.current = Date.now();
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    goTo((active + 1) % HERO_VIDEOS.length);
  }, [active, goTo]);

  // Advance to next video after `duration`
  useEffect(() => {
    if (paused) return undefined;
    startRef.current = Date.now();
    timerRef.current = setTimeout(next, current.duration);
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused]);

  // Drive the sprocket-tick progress fill smoothly
  useEffect(() => {
    if (paused) return undefined;
    let raf;
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      setProgress(Math.min(1, elapsed / current.duration));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused, current.duration]);

  return (
    <section
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Crossfading video layers */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <video
            key={current.src}
            className="h-full w-full object-cover"
            src={current.src}
            poster={current.poster}
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />
      <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-60" />
      <div className="absolute inset-0 bg-vignette" />

      {/* Copy */}
      <div className="relative z-10 flex h-full flex-col justify-end section-pad pb-28 md:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4">{current.eyebrow} —Photo-Studio</p>
            <h1 className="whitespace-pre-line font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-ivory max-w-2xl">
              {current.title}
            </h1>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link to="/portfolio" className="btn-primary">View Portfolio</Link>
          <Link to="/services" className="btn-ghost">Book a Shoot</Link>
        </motion.div>
      </div>

      {/* Film-strip sprocket progress indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-10 section-pad">
        <div className="flex items-center gap-2">
          {HERO_VIDEOS.map((v, i) => (
            <button
              key={v.id}
              onClick={() => goTo(i)}
              aria-label={`Show ${v.eyebrow} reel`}
              className="group relative h-2 flex-1 max-w-[90px] overflow-hidden bg-ivory/15"
            >
              <span
                className="absolute inset-y-0 left-0 bg-gold"
                style={{
                  width: i < active ? '100%' : i === active ? `${progress * 100}%` : '0%',
                }}
              />
              {/* sprocket ticks */}
              <span className="absolute inset-0 flex justify-between px-[3px] items-center">
                {Array.from({ length: 6 }).map((_, t) => (
                  <span key={t} className="h-2 w-px bg-ink/40" />
                ))}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ivory/50">
          <span>{String(active + 1).padStart(2, '0')} / {String(HERO_VIDEOS.length).padStart(2, '0')}</span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}

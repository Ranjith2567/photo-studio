import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, viewportOnce } from '../../lib/motion.js';

const STATS = [
  { value: '9+', label: 'Years Shooting' },
  { value: '350+', label: 'Shoots Delivered' },
  { value: '40+', label: 'Cities Covered' },
  { value: '12', label: 'Awards & Features' },
];

export default function AboutTeaser() {
  return (
    <section className="relative section-pad py-24 md:py-32 border-t border-ivory/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="lg:col-span-5 relative aspect-[4/5] overflow-hidden bg-panel"
        >
          <img
            src="/assets/images/about/about-portrait.jpg"
            alt="Krishna, photographer"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 border-t border-gold/40 bg-ink/70 backdrop-blur-sm p-4 font-mono text-[10px] uppercase tracking-widest text-ivory/70">
          Lead Photographer
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="lg:col-span-7"
        >
          <p className="eyebrow mb-4">The Studio</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-ivory max-w-xl">
            I don't chase perfect light. I wait for honest light.
          </h2>
          <p className="mt-6 max-w-lg text-ivory2 leading-relaxed">
            Photo-Studio started as a one-person studio shooting weddings on
            weekends and has grown into a full practice across wedding, fashion,
            product and family photography — without losing the part that made it
            worth doing in the first place: paying attention.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl md:text-4xl text-gold">{s.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ivory/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-primary mt-12 inline-flex">
            The Full Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

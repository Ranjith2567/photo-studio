import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FEATURED, CATEGORY_LABELS } from '../../data/gallery.js';
import ExifTag from '../ui/ExifTag.jsx';
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion.js';

export default function FeaturedStrip() {
  return (
    <section className="section-pad py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
      >
        <div>
          <p className="eyebrow mb-4">Selected Frames</p>
          <h2 className="font-display text-3xl md:text-5xl text-ivory max-w-lg">
            A studio that moves across every kind of light.
          </h2>
        </div>
        <Link to="/portfolio" className="btn-ghost shrink-0">Full Portfolio</Link>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
      >
        {FEATURED.map((item, i) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            className={`group relative overflow-hidden bg-panel ${
              i % 5 === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[3/4]'
            }`}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ExifTag
              category={CATEGORY_LABELS[item.category]}
              aperture={item.aperture}
              shutter={item.shutter}
              iso={item.iso}
              focal={item.focal}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, viewportOnce } from '../../lib/motion.js';

export default function CTASection() {
  return (
    <section className="relative section-pad py-28 md:py-40 border-t border-ivory/10 overflow-hidden">
      <div className="absolute inset-0 bg-vignette opacity-60 pointer-events-none" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="relative text-center max-w-2xl mx-auto"
      >
        <p className="eyebrow mb-6">Let's Talk Dates</p>
        <h2 className="font-display text-4xl md:text-6xl leading-tight text-ivory">
          Your story deserves a frame this good.
        </h2>
        <p className="mt-6 text-ivory2">
          Currently booking weddings, editorials and campaigns for the season ahead.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/services" className="btn-primary">Check Availability</Link>
          <Link to="/contact" className="btn-ghost">Say Hello</Link>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition.jsx';
import { fadeUp, staggerContainer } from '../lib/motion.js';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="section-pad min-h-[80svh] flex flex-col items-center justify-center text-center">
        <motion.div initial="hidden" animate="show" variants={staggerContainer(0.15)}>
          <motion.p variants={fadeUp} className="eyebrow mb-6">Overexposed</motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-7xl md:text-9xl text-ivory">
            404
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-md mx-auto text-ivory2">
            This frame didn't make the final cut. The page you're looking for
            doesn't exist — or moved out of shot.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <Link to="/" className="btn-primary">Back to Home</Link>
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
}

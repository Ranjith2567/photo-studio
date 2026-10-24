import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition.jsx';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion.js';

const STATS = [
  { value: '9+', label: 'Years Shooting' },
  { value: '350+', label: 'Shoots Delivered' },
  { value: '40+', label: 'Cities Covered' },
  { value: '12', label: 'Awards & Features' },
];

const PHILOSOPHY = [
  {
    title: 'Attention over equipment',
    body: 'The right lens matters less than noticing the moment before it happens. Gear is a tool; attention is the craft.',
  },
  {
    title: 'Restraint in the edit',
    body: 'A photograph should look like it was seen, not manufactured. Editing serves the image — it never replaces it.',
  },
  {
    title: 'Show up prepared',
    body: 'Every shoot gets a plan, a shot list and a backup for the backup. Spontaneity works best inside good preparation.',
  },
];

const TIMELINE = [
  { year: '2017', event: 'Picked up a camera for a friend\'s wedding — never put it down.' },
  { year: '2019', event: 'Opened a one-room studio, started taking fashion and portrait clients.' },
  { year: '2021', event: 'First commercial campaign for a home-grown fashion label.' },
  { year: '2023', event: 'Crossed 200 weddings; began dedicated family portrait sessions.' },
  { year: '2026', event: 'Photo-Studio — a single studio across four disciplines.' },
];

export default function About() {
  return (
    <PageTransition>
      <section className="section-pad pt-36 pb-20">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
          <p className="eyebrow mb-4">About the Studio</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight text-ivory">
            I don't chase perfect light. I wait for honest light.
          </h1>
          <p className="mt-6 text-ivory2 leading-relaxed">
            Photo-Studio is built around one idea: a photograph should hold up
            to being looked at twice. What started as weekend wedding coverage has
            grown into a full practice spanning wedding, fashion, product and family
            work — but the habit of paying close attention hasn't changed.
          </p>
        </motion.div>
      </section>

      <section className="section-pad pb-24 border-t border-ivory/10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="relative aspect-[4/5] overflow-hidden bg-panel"
          >
            <img
              src="/assets/images/about/about-portrait.jpg"
              alt="Krishna at work"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.15)}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-6">Philosophy</motion.p>
            {PHILOSOPHY.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="mb-8 border-l border-gold/40 pl-6">
                <h3 className="font-display text-xl text-ivory mb-2">{p.title}</h3>
                <p className="text-ivory2 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad py-24 border-t border-ivory/10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <p className="font-display text-4xl md:text-5xl text-gold">{s.value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ivory/50">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-pad py-24 border-t border-ivory/10">
        <motion.p initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="eyebrow mb-12">
          Timeline
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="space-y-0"
        >
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.year}
              variants={fadeUp}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-6 ${
                i !== TIMELINE.length - 1 ? 'border-b border-ivory/10' : ''
              }`}
            >
              <span className="font-mono text-sm text-gold w-20 shrink-0">{t.year}</span>
              <span className="text-ivory2">{t.event}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}

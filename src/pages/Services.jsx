import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition.jsx';
import BookingForm from '../components/ui/BookingForm.jsx';
import { SERVICES } from '../data/services.js';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion.js';

export default function Services() {
  return (
    <PageTransition>
      <section className="section-pad pt-36 pb-16">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-2xl">
          <p className="eyebrow mb-4">Services &amp; Booking</p>
          <h1 className="font-display text-4xl md:text-6xl text-ivory">
            Packages Built Per Discipline
          </h1>
          <p className="mt-5 text-ivory2">
            Every category has its own rhythm — here's what's typically included.
            Custom scopes are always welcome.
          </p>
        </motion.div>
      </section>

      {SERVICES.map((group, gi) => (
        <section
          key={group.id}
          className={`section-pad py-16 ${gi !== 0 ? 'border-t border-ivory/10' : ''}`}
        >
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-ivory">{group.category}</h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-gold">{group.tagline}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.12)}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {group.packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                className={`relative flex flex-col p-8 border ${
                  pkg.featured ? 'border-gold bg-panel' : 'border-ivory/15 bg-panel/40'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-8 bg-gold px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink">
                    Most Booked
                  </span>
                )}
                <h3 className="font-display text-xl text-ivory">{pkg.name}</h3>
                <p className="mt-3">
                  <span className="font-display text-3xl text-gold">{pkg.price}</span>
                  <span className="ml-1 font-mono text-xs text-ivory/50">{pkg.unit}</span>
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ivory2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#booking" className="btn-ghost mt-8 justify-center">
                  Enquire
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>
      ))}

      <section id="booking" className="section-pad py-24 border-t border-ivory/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:col-span-4"
          >
            <p className="eyebrow mb-4">Booking Inquiry</p>
            <h2 className="font-display text-3xl text-ivory">Check Your Date</h2>
            <p className="mt-4 text-ivory2 leading-relaxed">
              Fill this in and it opens directly in your email client, addressed
              to the studio. No accounts, no back-and-forth forms.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:col-span-8"
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition.jsx';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion.js';

const STUDIO_EMAIL = 'hello@photostudio.com';

const CONTACT_DETAILS = [
  { label: 'Email', value: 'hello@photostudio.com', href: `mailto:${STUDIO_EMAIL}` },
  { label: 'Phone', value: '+91 00000 00000', href: 'tel:+910000000000' },
  { label: 'Studio', value: 'Chennai, TamilNadu, India', href: null },
  { label: 'Instagram', value: '@photostudio', href: 'https://instagram.com' },
];

const inputClasses =
  'w-full bg-transparent border-b border-ivory/25 py-3 text-ivory placeholder:text-ivory/35 focus:border-gold outline-none transition-colors duration-300';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name || 'website visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageTransition>
      <section className="section-pad pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.1)}
            className="lg:col-span-5"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-4">Contact</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl text-ivory">
              Let's Talk About Your Shoot
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-ivory2 leading-relaxed">
              Whether it's a wedding, a campaign or a week on the road — tell us
              what you have in mind and we'll take it from there.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-12 space-y-6">
              {CONTACT_DETAILS.map((d) => (
                <div key={d.label} className="border-b border-ivory/10 pb-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ivory/50">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} target={d.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-ivory hover:text-gold transition-colors">
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-ivory">{d.value}</p>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-ivory/50">Name</label>
                  <input required value={form.name} onChange={update('name')} placeholder="Your name" className={inputClasses} />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-ivory/50">Email</label>
                  <input required type="email" value={form.email} onChange={update('email')} placeholder="you@email.com" className={inputClasses} />
                </div>
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-ivory/50">Message</label>
                <textarea rows={6} required value={form.message} onChange={update('message')} placeholder="What are you shooting, and when?" className={`${inputClasses} resize-none`} />
              </div>
              <motion.button type="submit" whileTap={{ scale: 0.97 }} className="btn-primary">
                Send Message
              </motion.button>
              {sent && (
                <p className="font-mono text-xs text-gold">
                  Opening your email client — send it through and we'll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <section className="h-72 border-t border-ivory/10 bg-panel/40 flex items-center justify-center">
        <p className="font-mono text-xs uppercase tracking-widest text-ivory/40">
          Map — Chennai, TamilNadu, India
        </p>
      </section>
    </PageTransition>
  );
}

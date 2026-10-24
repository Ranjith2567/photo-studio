import { Link } from 'react-router-dom';

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'WhatsApp', href: 'https://wa.me/910000000000' },
  { label: 'Behance', href: 'https://behance.net' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ivory/10 bg-ink section-pad pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-ivory">
          <span className="italic text-gold">Photo-Studio</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-ivory2 leading-relaxed">
            Wedding, fashion, product and family photography — shot with intention,
            edited with restraint, delivered like it matters.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Studio</p>
          <ul className="space-y-2 text-sm text-ivory2">
            <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services &amp; Booking</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Connect</p>
          <ul className="space-y-2 text-sm text-ivory2">
            <li><a href="mailto:hello@photostudio.com" className="hover:text-gold transition-colors">hello@photostudio.com</a></li>
            <li><a href="tel:+910000000000" className="hover:text-gold transition-colors">+91 00000 00000</a></li>
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-ivory/10 pt-6 font-mono text-[11px] uppercase tracking-widest text-ivory/40">
        <span>© {new Date().getFullYear()} Photo-Studio. All frames reserved.</span>
        <span>ƒ/1.8 · 1/200s · ISO 100 — shot on location</span>
      </div>
    </footer>
  );
}

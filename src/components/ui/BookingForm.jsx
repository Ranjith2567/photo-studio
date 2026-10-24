import { useState } from 'react';
import { motion } from 'framer-motion';
import { EVENT_TYPES } from '../../data/services.js';

const STUDIO_EMAIL = 'hello@photostudio.com';

const inputClasses =
  'w-full bg-transparent border-b border-ivory/25 py-3 text-ivory placeholder:text-ivory/35 focus:border-gold outline-none transition-colors duration-300';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    eventType: EVENT_TYPES[0],
    message: '',
  });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking Inquiry — ${form.eventType}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPreferred Date: ${form.date}\nEvent Type: ${form.eventType}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-ivory/50">Name</label>
          <input
            required
            value={form.name}
            onChange={update('name')}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-ivory/50">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="you@email.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-ivory/50">Preferred Date</label>
          <input
            type="date"
            value={form.date}
            onChange={update('date')}
            className={inputClasses}
          />
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-ivory/50">Event Type</label>
          <select
            value={form.eventType}
            onChange={update('eventType')}
            className={`${inputClasses} appearance-none`}
          >
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t} className="bg-ink">{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="font-mono text-[10px] uppercase tracking-widest text-ivory/50">Message</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about the shoot — location, headcount, vision…"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.97 }}
        className="btn-primary"
      >
        Send Inquiry
      </motion.button>

      {sent && (
        <p className="font-mono text-xs text-gold">
          Opening your email client — send it through and we'll reply within 48 hrs.
        </p>
      )}
    </form>
  );
}

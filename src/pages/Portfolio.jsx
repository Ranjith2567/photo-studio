import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition.jsx';
import FilterBar from '../components/Gallery/FilterBar.jsx';
import GalleryGrid from '../components/Gallery/GalleryGrid.jsx';
import Lightbox from '../components/Gallery/Lightbox.jsx';
import { GALLERY } from '../data/gallery.js';
import { fadeUp } from '../lib/motion.js';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [activeId, setActiveId] = useState(null);

  const items = useMemo(
    () => (filter === 'all' ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <PageTransition>
      <section className="section-pad pt-36 pb-16">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <p className="eyebrow mb-4">Portfolio</p>
          <h1 className="font-display text-4xl md:text-6xl text-ivory max-w-2xl">
            Frames Across Every Assignment
          </h1>
          <p className="mt-5 max-w-xl text-ivory2">
            Wedding, fashion, product and family — filter by category or browse it all.
          </p>
        </motion.div>

        <div className="mt-10">
          <FilterBar active={filter} onChange={setFilter} />
        </div>
      </section>

      <section className="section-pad pb-28">
        <GalleryGrid items={items} onOpen={(item) => setActiveId(item.id)} />
      </section>

      <Lightbox
        items={items}
        activeId={activeId}
        onClose={() => setActiveId(null)}
        onNavigate={setActiveId}
      />
    </PageTransition>
  );
}

// Central gallery dataset.
// Image `src` paths match the real files placed in
// public/assets/images/gallery/<category>/.

const CATEGORIES = ['wedding', 'fashion', 'product', 'family'];

const COUNTS = {
  wedding: 59,
  fashion: 16,
  product: 10,
  family: 9,
};

const EXIF_BY_CATEGORY = {
  wedding: [
    { aperture: '1.8', shutter: '250', iso: 200, focal: 85 },
    { aperture: '2.0', shutter: '200', iso: 400, focal: 50 },
    { aperture: '1.4', shutter: '160', iso: 100, focal: 35 },
  ],
  fashion: [
    { aperture: '2.8', shutter: '320', iso: 100, focal: 70 },
    { aperture: '1.8', shutter: '250', iso: 200, focal: 85 },
    { aperture: '4.0', shutter: '400', iso: 100, focal: 105 },
  ],
  product: [
    { aperture: '8.0', shutter: '125', iso: 100, focal: 100 },
    { aperture: '11', shutter: '160', iso: 100, focal: 60 },
    { aperture: '5.6', shutter: '200', iso: 100, focal: 50 },
  ],
  family: [
    { aperture: '2.0', shutter: '250', iso: 200, focal: 50 },
    { aperture: '2.8', shutter: '320', iso: 200, focal: 35 },
    { aperture: '1.8', shutter: '200', iso: 400, focal: 85 },
  ],
};

const TITLE_POOL_BY_CATEGORY = {
  wedding: [
    'First Look', 'Mandap at Dusk', 'The Vows', 'Baraat Procession',
    'Sindoor Ceremony', 'Reception Lights', 'Haldi Morning', 'Sangeet Night',
    'The Exit', 'Quiet Moment', 'Mehendi Detail', 'Varmala Exchange',
    'Bridal Portrait', 'Phera Ceremony', 'Vidai',
  ],
  fashion: [
    'Studio Series', 'Editorial — Monsoon', 'Portrait, North Light',
    'Street Editorial', 'Concept — Amber', 'Portrait, Rooftop',
    'Editorial — Noir', 'Look Book', 'Brand Shoot',
  ],
  product: [
    'Perfume Bottle', 'Skincare Hero', 'Flat Lay', 'Packaging Set',
    'Oil Bottle Macro', 'Cream Tube Study',
  ],
  family: [
    'Family Portrait', 'Birthday Celebration', 'Little Moments',
    'Together', 'New Arrival',
  ],
};

export const GALLERY = CATEGORIES.flatMap((category) =>
  Array.from({ length: COUNTS[category] }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    const exif = EXIF_BY_CATEGORY[category][i % EXIF_BY_CATEGORY[category].length];
    const pool = TITLE_POOL_BY_CATEGORY[category];
    const title = `${pool[i % pool.length]} ${n}`;
    return {
      id: `${category}-${n}`,
      category,
      title,
      src: `/assets/images/gallery/${category}/gallery-${category}-${n}.jpg`,
      ...exif,
    };
  })
);

export const FEATURED_IDS = [
  'wedding-02', 'fashion-01', 'product-03', 'family-04',
  'wedding-15', 'fashion-06', 'family-01', 'product-07',
];

export const FEATURED = FEATURED_IDS
  .map((id) => GALLERY.find((g) => g.id === id))
  .filter(Boolean);

export const CATEGORY_LABELS = {
  all: 'All Work',
  wedding: 'Wedding',
  fashion: 'Fashion',
  product: 'Product',
  family: 'Family',
};

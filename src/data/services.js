export const SERVICES = [
  {
    id: 'wedding',
    category: 'Wedding',
    tagline: 'Full-day coverage, told as a story',
    packages: [
      {
        name: 'Essential',
        price: '₹65,000',
        unit: '/ one day',
        features: ['1 photographer', '6 hrs coverage', '300+ edited photos', 'Online gallery'],
      },
      {
        name: 'Signature',
        price: '₹1,45,000',
        unit: '/ two days',
        features: ['2 photographers', '2-day coverage', '800+ edited photos', 'Cinematic highlight film', 'Printed album'],
        featured: true,
      },
      {
        name: 'Heritage',
        price: 'On request',
        unit: '/ full wedding',
        features: ['Full team', 'All ceremonies', 'Same-day teaser reel', 'Premium album + frame', 'Drone coverage'],
      },
    ],
  },
  {
    id: 'fashion',
    category: 'Fashion / Portrait',
    tagline: 'Studio or on-location editorial',
    packages: [
      {
        name: 'Portrait Session',
        price: '₹15,000',
        unit: '/ 2 hrs',
        features: ['1 look', '25 edited photos', 'Studio or outdoor', 'Digital delivery'],
      },
      {
        name: 'Editorial',
        price: '₹40,000',
        unit: '/ half day',
        features: ['Up to 4 looks', '60+ edited photos', 'Hair & makeup coordination', 'Creative direction'],
        featured: true,
      },
      {
        name: 'Lookbook',
        price: 'On request',
        unit: '/ full day',
        features: ['Multiple looks', 'Full retouching', 'Usage licensing', 'Behind-the-scenes reel'],
      },
    ],
  },
  {
    id: 'product',
    category: 'Product / Commercial',
    tagline: 'Catalogue-ready, campaign-ready',
    packages: [
      {
        name: 'Catalogue',
        price: '₹1,200',
        unit: '/ product',
        features: ['White background', '3 angles', '24 hr turnaround', 'E-commerce ready'],
      },
      {
        name: 'Brand Set',
        price: '₹35,000',
        unit: '/ day',
        features: ['Styled flat lays', 'Lifestyle shots', 'Up to 20 SKUs', 'Full retouching'],
        featured: true,
      },
      {
        name: 'Campaign',
        price: 'On request',
        unit: '/ project',
        features: ['Full art direction', 'Model + styling coordination', 'Multi-day shoot', 'Usage licensing'],
      },
    ],
  },
  {
    id: 'travel',
    category: 'Travel / Nature',
    tagline: 'Documentary work, on assignment',
    packages: [
      {
        name: 'Day Assignment',
        price: '₹25,000',
        unit: '/ day',
        features: ['Single location', '100+ edited photos', 'Local travel included', 'Digital delivery'],
      },
      {
        name: 'Documentary',
        price: '₹90,000',
        unit: '/ week',
        features: ['Multi-location', 'Full documentary set', 'Short-form edit', 'Print-ready selects'],
        featured: true,
      },
      {
        name: 'Expedition',
        price: 'On request',
        unit: '/ custom',
        features: ['Extended assignment', 'Drone + ground coverage', 'Publication-ready delivery', 'Licensing included'],
      },
    ],
  },
];

export const EVENT_TYPES = [
  'Wedding', 'Pre-Wedding', 'Fashion / Portrait', 'Product / Commercial', 'Travel / Nature', 'Other',
];

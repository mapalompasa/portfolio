export interface Project {
  id: string;
  number: string;
  name: string;
  industry: string;
  services: string[];
  description: string;
  highlights: string[];
  domain: string;
  tag: string;
  accentColor: string;
  url: string;
  devUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'cedar-stone-cafe',
    number: '01',
    name: 'CEDAR & STONE CAFÉ',
    industry: 'HOSPITALITY / CAFÉ & ARTISAN BAKERY',
    services: ['BRAND IDENTITY', 'WEBSITE DESIGN', 'DEVELOPMENT'],
    description: 'Artisanal coffee house and farm-to-table seasonal kitchen website built for instant online table reservations, sensory menu browsing, and warm brand storytelling.',
    highlights: [
      'Sensory Seasonal Menu Filter & Highlights',
      'Instant Online Table Reservation Flow',
      'Tactile typography & spatial photography'
    ],
    domain: 'cedarandstonecafe.com',
    tag: 'Artisanal Hospitality',
    accentColor: '#C48B60',
    url: '/projects/cedar-and-stone-cafe/index.html',
    devUrl: 'http://localhost:5174'
  },
  {
    id: 'riverside-dental',
    number: '02',
    name: 'RIVERSIDE DENTAL CARE',
    industry: 'HEALTHCARE / DENTAL CLINIC',
    services: ['UI/UX DESIGN', 'CONVERSION STRATEGY', 'DEVELOPMENT'],
    description: 'Modern family and cosmetic dentistry website engineered around patient comfort, instant appointment booking, smile transformation case studies, and transparent care.',
    highlights: [
      'Frictionless Patient Consultation Scheduler',
      'Smile Makeover & Treatment Showcase',
      'Trust-first healthcare conversion architecture'
    ],
    domain: 'riversidedentalcare.com',
    tag: 'Healthcare & Aesthetics',
    accentColor: '#0EA5E9',
    url: '/projects/riverside/index.html',
    devUrl: 'http://localhost:5175'
  }
];

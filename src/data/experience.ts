// Professional experience — data-driven (one record per role) rather than one
// component per entry. Logos are imported so they carry width/height metadata.
import type { ImageMetadata } from 'astro';

import lexington from '../assets/teacher/LexingtonLogo.jpeg';
import takedaLogo from '../assets/takeda/TakedaLogo.avif';
import niskayuna from '../assets/volunteer/NiskayunaLogo.png';
import wgbhLogo from '../assets/wgbh/WGBHLogo.png';

export interface Experience {
  slug: string;
  role: string;
  org: string;
  location: string;
  startYear: number;
  endYear: number | null;
  url: string;
  logo: ImageMetadata;
  /** Longer detail; empty renders a designed placeholder. */
  body?: string;
  draft?: boolean;
}

export const experience: Experience[] = [
  {
    slug: 'teacher',
    role: 'Substitute Teacher & Volunteer',
    org: 'Lexington Public Schools',
    location: 'Lexington, MA',
    startYear: 2010,
    endYear: 2023,
    url: 'https://lps.lexingtonma.org/',
    logo: lexington,
  },
  {
    slug: 'takeda',
    role: 'Community Consultant, IACUC Board Member',
    org: 'Takeda (formerly Shire) Pharmaceuticals',
    location: 'Cambridge, MA',
    startYear: 2013,
    endYear: 2019,
    url: 'https://www.takeda.com/',
    logo: takedaLogo,
  },
  {
    slug: 'volunteer',
    role: 'Volunteer',
    org: 'Niskayuna Public Schools',
    location: 'Niskayuna, NY',
    startYear: 2005,
    endYear: 2010,
    url: 'https://www.niskayunaschools.org/',
    logo: niskayuna,
  },
  {
    slug: 'wgbh',
    role: 'Field Producer — Frontline, NOVA, National Programming',
    org: 'WGBH',
    location: 'Boston, MA',
    startYear: 1990,
    endYear: 2000,
    url: 'https://www.wgbh.org/',
    logo: wgbhLogo,
  },
];

export const publishedExperience = experience.filter((e) => !e.draft);

export const getExperience = (slug: string) =>
  experience.find((e) => e.slug === slug);

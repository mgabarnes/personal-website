// Education — data-driven. Draft entries stay in the data (so their pages and
// history are preserved) but are hidden from listings until content is ready.
import type { ImageMetadata } from 'astro';

import syracuseLogo from '../assets/syracuse/syracuse_horizontal_1Line.svg';
import stanfordLogo from '../assets/stanford/StanfordLogo.png';
import palaisLogo from '../assets/palais/PalaisLogo.jpeg';
import grubstreetLogo from '../assets/grubstreet/GrubStreetLogo.svg';
import hugohouseLogo from '../assets/hugohouse/HugoHouseLogo.png';
import onestoryLogo from '../assets/onestory/OneStoryLogo.svg';

export interface Education {
  slug: string;
  title: string;
  /** Secondary line: parent institution or location. */
  context: string;
  url: string;
  logo: ImageMetadata;
  body?: string;
  draft?: boolean;
}

export const education: Education[] = [
  {
    slug: 'syracuse',
    title: 'S.I. Newhouse School of Public Communications',
    context: 'Syracuse University · B.S., Television & Film Production',
    url: 'https://www.syracuse.edu/',
    logo: syracuseLogo,
  },
  {
    slug: 'stanford',
    title: 'Stanford Continuing Education',
    context: 'Stanford University',
    url: 'https://continuingstudies.stanford.edu/',
    logo: stanfordLogo,
  },
  {
    slug: 'palais',
    title: 'Palais Universitaire',
    context: 'Strasbourg, France',
    url: 'https://int.strasbourg.eu/place/-/entity/sig/1004_CUL_155',
    logo: palaisLogo,
  },
  {
    slug: 'grubstreet',
    title: 'GrubStreet',
    context: 'Boston, MA',
    url: 'https://www.grubstreet.org/',
    logo: grubstreetLogo,
    draft: true,
  },
  {
    slug: 'hugohouse',
    title: 'Hugo House',
    context: 'Seattle, WA',
    url: 'https://hugohouse.org/',
    logo: hugohouseLogo,
    draft: true,
  },
  {
    slug: 'onestory',
    title: 'One Story',
    context: 'Brooklyn, NY',
    url: 'https://one-story.com/',
    logo: onestoryLogo,
    draft: true,
  },
];

export const publishedEducation = education.filter((e) => !e.draft);

export const getEducation = (slug: string) =>
  education.find((e) => e.slug === slug);

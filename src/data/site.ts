// Single source of truth for site-wide identity, navigation, and social links.
// Header, Footer, Contact, and SEO all read from here.

export const site = {
  name: 'Michaela Barnes',
  role: 'Writer',
  tagline: 'Essays & short stories',
  description:
    'Michaela Barnes is a writer of essays and short stories. Read her published work, including "Stealing Paris" in the Long River Review.',
  url: 'https://michaela-barnes.com',
  email: 'mgabarnes@gmail.com',
  // Default social/OG image, relative to /public.
  ogImage: '/og-default.png',
  locale: 'en_US',
  startYear: 2024,
} as const;

export const social = [
  {
    label: 'Instagram',
    handle: '@mibarnesg',
    href: 'https://www.instagram.com/mibarnesg/',
  },
  {
    label: 'LinkedIn',
    handle: 'Michaela Barnes',
    href: 'https://www.linkedin.com/in/michaela-barnes-41478295/',
  },
  {
    label: 'Email',
    handle: 'mgabarnes@gmail.com',
    href: 'mailto:mgabarnes@gmail.com',
  },
] as const;

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Writing', href: '/writing' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Photography', href: '/photography' },
  { label: 'Contact', href: '/contact' },
] as const;

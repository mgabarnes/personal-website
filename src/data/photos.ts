// Photography gallery. Images imported for <Image> optimization (these are the
// large source files, so responsive WebP output matters most here).
// TODO (owner): replace the placeholder alt/caption text with real descriptions.
import type { ImageMetadata } from 'astro';

import photo1 from '../assets/photogallery/photo1.jpg';
import photo2 from '../assets/photogallery/photo2.jpg';
import photo3 from '../assets/photogallery/photo3.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export const photos: Photo[] = [
  { src: photo1, alt: 'Photograph by Michaela Barnes' },
  { src: photo2, alt: 'Photograph by Michaela Barnes' },
  { src: photo3, alt: 'Photograph by Michaela Barnes' },
];

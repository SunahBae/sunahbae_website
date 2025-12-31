export interface Experience {
  id: string;
  title: string;
  role: string;
  organization: string;
  location?: string;
  year: string;
  thumbnail?: string;
  thumbnails?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: '<International APETalk> 퍼실리테이터',
    role: 'Facilitator',
    organization: '한국문화예술위원회',
    location: 'Seoul',
    year: '2025',
    thumbnails: ['/images/exp-1-1.png'],
  },
  {
    id: 'exp-2',
    title: 'Visiting Scholar Event: Lab Tour and Technology Showcase for NTU Guests',
    role: 'Presentation & Demonstration',
    organization: 'KAIST',
    location: 'Republic of Korea',
    year: '2025',
    thumbnails: ['/images/exp-2-1.png', '/images/exp-2-2.png', '/images/exp-2-3.png', '/images/exp-2-4.png'],
  },
  {
    id: 'exp-3',
    title: 'HK PolyU Joint Workshop',
    role: 'Presentation',
    organization: 'Hong Kong Polytechnic University',
    location: 'Hong Kong',
    year: '2025',
    thumbnails: ['/images/exp-3-1.png', '/images/exp-3-2.png'],
  },
];

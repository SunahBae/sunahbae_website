export interface TechnicalContribution {
  id: string;
  title: string;
  description: string;
  year: string;
  badges?: Array<{
    type: 'link' | 'video';
    label: string;
    url?: string;
  }>;
  thumbnail?: string;
}

export const technicalContributions: TechnicalContribution[] = [
  {
    id: 'tech-1',
    title: '<진리를 훔친 자 Thief of Truth>',
    description: '3D modeling & Rendering & VR development, Mover,Misc, Seoul, 2022',
    year: '2022',
    badges: [
      { type: 'link', label: 'Link', url: 'https://joonhyungbae.com/#/post/2022-art-thief-of-truth' },
    ],
    thumbnail: '/images/tech-1.jpg',
  },
];

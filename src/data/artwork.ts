export interface ArtWork {
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

export const artworks: ArtWork[] = [
  {
    id: 'art-1',
    title: '<어.. Uh..>, 2022, mixed media, 300 X 300 X 700 (mm)',
    description: '주소과 졸업전시, 홍익대학교, 대한민국, 2022',
    year: '2022',
    badges: [
      { type: 'video', label: 'Video', url: 'https://youtu.be/LKfR1zKIPlY' },
    ],
    thumbnail: '/images/art-1.jpg',
  },
  {
    id: 'art-2',
    title: '<동동 DongDong>, 2022, mixed media, 420 X 350 X 800 (mm)',
    description: '제 47회 야외조각전, 홍익대학교, 대한민국, 2022',
    year: '2022',
    thumbnail: '/images/art-2.jpg',
  },
];

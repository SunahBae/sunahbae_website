export interface DesignItem {
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

export const designItems: DesignItem[] = [
  {
    id: 'design-1',
    title: 'Future Space Lab introduction video',
    description: 'Design the layout of FSL introduction video, Future Space Lab, 2024',
    year: '2024',
    badges: [
      { type: 'video', label: 'Video', url: 'https://www.youtube.com/watch?v=4Fk_6BVnf_o' },
    ],
    thumbnail: '/images/design-1.jpg',
  },
  {
    id: 'design-2',
    title: 'Signage design for KAIST Graduate School of Culture and Technology',
    description: 'Design the CT signage, KAIST CT, 2023',
    year: '2023',
    thumbnail: '/images/design-2.jpg',
  },
  {
    id: 'design-3',
    title: 'Future Space Lab Website Renewal',
    description: 'Redesign the FSL website, Future Space Lab, 2022',
    year: '2022',
    badges: [
      { type: 'link', label: 'Link', url: 'https://www.fsl.kaist.ac.kr/' },
    ],
    thumbnail: '/images/design-3.jpg',
  },
];

export interface Project {
  id: string;
  title: string;
  role: string;
  organization: string;
  year: string;
  badges?: Array<{
    type: 'link' | 'video';
    label: string;
    url?: string;
  }>;
  thumbnail?: string;
  media?: {
    type: 'video' | 'image';
    url: string;
  };
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: '삼성물산 래미안 미래 상품디자인 비전과 전략 종합 연구',
    role: 'Research Assistant',
    organization: '삼성물산',
    year: '2025',
  },
  {
    id: 'proj-2',
    title: '초시공간 교류를 위한 AR-AI-인지-건축 융합연구',
    role: 'Responsive Space Team Leader',
    organization: '한국연구재단',
    year: '2024~',
  },
  {
    id: 'proj-3',
    title: '문화 환경 취약 지역 내 초중등학생을 위한 XR 뮤지엄',
    role: 'Project Leader',
    organization: '국가과학기술인력개발원',
    year: '2023',
    badges: [
      { type: 'video', label: 'Video', url: 'https://youtu.be/WyMmuBkmWnY' },
    ],
    thumbnail: '/images/proj-3.jpg',
    media: {
      type: 'video',
      url: 'https://youtu.be/WyMmuBkmWnY',
    },
  },
  {
    id: 'proj-4',
    title: '시각장애인의 이동 및 감상 보조를 위한 전시 로봇에 관한 연구',
    role: 'Project Leader',
    organization: '홍익대학교',
    year: '2022',
    badges: [
      { type: 'video', label: 'Video', url: 'https://youtu.be/_C3HSRGN-7Y' },
    ],
    thumbnail: '/images/proj-4.jpg',
    media: {
      type: 'video',
      url: 'https://youtu.be/_C3HSRGN-7Y',
    },
  },
  {
    id: 'proj-5',
    title: '텍스트 분석을 활용한 서울 전시 공간 아카이브 개선 방안 연구',
    role: 'Research Assistant',
    organization: '서울연구원',
    year: '2020',
    badges: [
      { type: 'link', label: 'Link', url: 'https://www.si.re.kr/sites/default/files/20-17.pdf' },
    ],
    thumbnail: '/images/proj-5.jpg',
  },
];

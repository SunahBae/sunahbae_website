export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  badges: Array<{
    type: 'link' | 'video' | 'conf' | 'dom' | 'int' | 'ect';
    label: string;
    url?: string;
  }>;
  thumbnails?: string[];
}

export const publications: Publication[] = [
  {
    id: 'pub-10',
    title: 'The Effect of Artwork Size on Visitor Attention in Museum Curatorial Arrangement',
    authors: 'Dagyeom Chung, Sun Ah Bae, Gisung Han, Seung Hyun Cha',
    venue: 'Design Computing and Cognition\'26, Paris, France, 8–10 July 2026',
    year: '2026',
    badges: [
      { type: 'conf', label: 'Conf.' },
      { type: 'int', label: 'Int.' },
    ],
    thumbnails: [],
  },
  {
    id: 'pub-9',
    title: 'A framework for analyzing XR media art through impossible spaces and interaction structures',
    authors: 'Jae Yeon Shin, Dagyeom Chung, Sun Ah Bae, Seung Hyun Cha',
    venue: 'Proceedings of the 12th International Conference on Digital and Interactive Arts (ARTECH 2025), Braga, Portugal, 26-28 November 2025',
    year: '2025',
    badges: [
      { type: 'conf', label: 'Conf.' },
      { type: 'int', label: 'Int.' },
    ],
    thumbnails: ['/images/pub-9-xr.png'],
  },
  {
    id: 'pub-8',
    title: 'Adaptive Virtual Reality Space Design Based on Real-Time User Emotion',
    authors: 'Sun Ah Bae, Yujeung Eum, Hyun Woo Kim, Yeongjo Kim, Dahye Jeon, Jae Young Jang, Seung Hyun Cha',
    venue: 'IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct), 2025',
    year: '2025',
    badges: [
      { type: 'link', label: 'Link', url: 'https://ieeexplore.ieee.org/document/11236383' },
      { type: 'conf', label: 'Conf.' },
      { type: 'int', label: 'Int.' },
    ],
    thumbnails: ['/images/pub-8-vr.png'],
  },
  {
    id: 'pub-7',
    title: 'The Soaring Serenity: An Immersive VR Artwork for Perspective Shift',
    authors: 'Kirak Kim, Hyun Woo Kim, Sun Ah Bae, Jung Won Lee, Sungyoung Kim',
    venue: 'International Symposium on Electronic/Emerging Art, 2025',
    year: '2025',
    badges: [
      { type: 'link', label: 'Link', url: 'https://www.isea-symposium-archives.org/wp-content/uploads/2025/10/ISEA2025-Proceedings.pdf' },
      { type: 'conf', label: 'Conf.' },
      { type: 'int', label: 'Int.' },
    ],
    thumbnails: ['/images/pub-7-1.png', '/images/pub-7-2.png', '/images/pub-7-3.png'],
  },
  {
    id: 'pub-6',
    title: 'A Conceptual Framework for Designing User-Centric and Responsive Design Experiences in the Built Environment',
    authors: 'Yujeung Eum, Sun Ah Bae, Hyun Woo Kim, Yoan Song, Seung Hyun Cha',
    venue: 'Smart and Sustainable Built Environment, 2024',
    year: '2024',
    badges: [
      { type: 'link', label: 'Link', url: 'https://doi.org/10.1007/978-981-96-4051-5_3' },
      { type: 'conf', label: 'Conf.' },
      { type: 'int', label: 'Int.' },
    ],
    thumbnails: ['/images/pub-6-cf.png'],
  },
  {
    id: 'pub-5',
    title: 'Analyzing space types with an HMD-based VR exhibition case study (HMD 기반 VR 전시 사례조사를 통한 공간 유형 분석)',
    authors: 'Sun Ah Bae, Hyun Woo Kim, Seung Hyun Cha',
    venue: 'Winter Conference of Society for Computational Design and Engineering, 2024',
    year: '2024',
    badges: [
      { type: 'link', label: 'Link', url: 'https://drive.google.com/file/d/1ovc2Qj9ioG4B46TybArBP-Bcq4CQFJmI/view?usp=sharing' },
      { type: 'conf', label: 'Conf.' },
      { type: 'dom', label: 'Dom.' },
    ],
    thumbnails: ['/images/pub-5-1.png'],
  },
  {
    id: 'pub-4',
    title: 'Proposal for Design Research Directions to Enhance Virtual Spatial Experience - Focused on Visual Perception Research - (가상 공간 경험 향상을 위한 디자인 연구 방향 제안– 공간 인식 연구를 중심으로-)',
    authors: 'Hyun Woo Kim, Sun Ah Bae, Seung Hyun Cha',
    venue: 'Winter Conference of Society for Computational Design and Engineering, 2024',
    year: '2024',
    badges: [
      { type: 'link', label: 'Link', url: 'https://drive.google.com/file/d/1Vbz9S-Ts0usGkI5LtFMDx93fYXFozrd5/view?usp=drive_link' },
      { type: 'conf', label: 'Conf.' },
      { type: 'dom', label: 'Dom.' },
    ],
    thumbnails: ['/images/pub-4-1.png'],
  },
  {
    id: 'pub-3',
    title: 'Ddancing Ppongsa : XR Collaborative Dance Game (땐싱뽕사: XR 협동 댄스 게임)',
    authors: 'Sun Ah Bae, Kirak Kim, Sungpil Wang, Woontack Woo',
    venue: 'The HCI Society of Korea, 2024',
    year: '2024',
    badges: [
      { type: 'link', label: 'Link', url: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11714856' },
      { type: 'video', label: 'Video', url: 'https://youtu.be/zgRc7zjBsm8' },
      { type: 'conf', label: 'Conf.' },
      { type: 'dom', label: 'Dom.' },
    ],
    thumbnails: ['/images/pub-3-1.png', '/images/pub-3-2.png', '/images/pub-3-3.png'],
  },
  {
    id: 'pub-2',
    title: 'A study on the Exhibition Robot for Visually Impaired People (전시 관람 관련 시각장애인의 이동 및 감상 보조를 위한 전시 로봇 연구)',
    authors: 'Sun Ah Bae, GeonHoo Son, SeungHun Yoo, JiHo Kim, DokShin Lim',
    venue: 'Korea Society of Design Science, 2022',
    year: '2022',
    badges: [
      { type: 'link', label: 'Link', url: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11714856' },
      { type: 'video', label: 'Video', url: 'https://youtu.be/_C3HSRGN-7Y' },
      { type: 'conf', label: 'Conf.' },
      { type: 'dom', label: 'Dom.' },
    ],
    thumbnails: ['/images/pub-2-1.png'],
  },
  {
    id: 'pub-1',
    title: '텍스트 분석을 활용한 서울 전시 공간 아카이브 개선 방안 연구',
    authors: 'Joonhyung Bae, Sun Ah Bae, Jaehwang Lee',
    venue: 'The Seoul Institute, 2022',
    year: '2022',
    badges: [
      { type: 'link', label: 'Link', url: 'https://www.si.re.kr/sites/default/files/20-17.pdf' },
      { type: 'ect', label: 'Ect.' },
      { type: 'dom', label: 'Dom.' },
    ],
    thumbnails: ['/images/pub-1-1.png', '/images/pub-1-2.png'],
  },
];

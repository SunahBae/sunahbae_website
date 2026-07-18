/**
 * 필드가 화면에 보이는 순서 그대로 나열되어 있습니다. 적은 대로 표시됩니다.
 *
 *  [status] [type] [scope]  venue
 *  title  (link → 제목 클릭, video → Video 버튼)
 *  authors ('Sun Ah Bae'는 자동 밑줄 강조)
 *
 *  year 는 연도 그룹핑과 YEAR 필터에 쓰입니다.
 *  TYPE 필터는 type 텍스트의 시작 단어로 분류됩니다
 *  (Journal… → Journal, Conference… → Conference, 그 외 → Etc.)
 */
export interface Publication {
  id: string;
  /** 상태 배지 (예: 'Submitted') — 출판 완료면 줄 자체를 생략 */
  status?: string;
  /** 첫 배지에 그대로 표시: 'Journal · SCIE Q1' / 'Conference' / 'Etc.' */
  type: string;
  /** 둘째 배지: 'Int.' 또는 'Dom.' */
  scope?: string;
  /** 배지 뒤에 그대로 표시되는 저널/학회 텍스트 */
  venue: string;
  /** 제목 — 그대로 표시 */
  title: string;
  /** 제목에 걸리는 링크 (없으면 생략) */
  link?: string;
  /** Video 버튼 링크 (없으면 생략) */
  video?: string;
  /** 저자 */
  authors: string;
  /** 연도 (그룹핑/필터용) */
  year: string;
  thumbnails?: string[];
}

export const publications: Publication[] = [
  {
    id: 'pub-14',
    status: 'Submitted',
    type: 'Journal · KCI',
    scope: 'Dom.',
    venue: 'Journal of Digital Contents Society, 2026',
    title: 'A Framework for XR Museums in Idle School Classrooms: An Implementation Strategy to Mitigate Cultural Accessibility Gaps  (학교 유휴교실 기반 XR 박물관 프레임워크: 문화접근성 격차 완화를 위한 구축 전략)',
    authors: 'Sun Ah Bae, SeoHyun Bae, Hyun Woo Kim, Seung Hyun Cha',
    year: '2026',
    thumbnails: ['/images/pub-14.png'],
  },
  {
    id: 'pub-13',
    status: 'Submitted',
    type: 'Conference',
    scope: 'Int.',
    venue: 'Summer Conference of Society for Computational Design and Engineering, 2026',
    title: 'Research Directions for Adaptive Spaces Based on an Analysis of Combinations of Place Multiplicity and Autonomous Adaptivity (장소 다중성과 자율 적응성의 결합 양상 분석을 통한 적응형 공간 연구 방향 제안)',
    authors: 'Sun Ah Bae, Yujeung Eum, Yeongjo Kim, Dahye Jeon, Seung Hyun Cha',
    year: '2026',
    thumbnails: [],
  },
  {
    id: 'pub-12',
    status: 'Submitted',
    type: 'Journal · SCIE Q1',
    scope: 'Int.',
    venue: 'Virtual Reality, Springer Nature',
    title: 'Curve Type Matters: Emotional and Physiological Responses to Curved Walls in Virtual Reality Exhibition Space',
    authors: 'Sun Ah Bae, Jisoo Kang, Seung Hyun Cha',
    year: '2026',
    thumbnails: ['/images/pub-12.png'],
  },
  {
    id: 'pub-11',
    type: 'Journal · SCIE Q1',
    scope: 'Int.',
    venue: 'Scientific Reports, 2026',
    title: 'Virtual reality transition to underground: human responses across sequential spatial transitions',
    link: 'https://www.nature.com/articles/s41598-026-53532-1',
    authors: 'Koeun Jung, Kyunghyun Cho, Hyeokjin Choi, Sun Ah Bae, Sookyung Chun, Seung Hyun Cha',
    year: '2026',
    thumbnails: [],
  },
  {
    id: 'pub-10',
    type: 'Conference',
    scope: 'Int.',
    venue: "Design Computing and Cognition'26, Paris, France, 8–10 July 2026",
    title: 'The Effect of Artwork Size on Visitor Attention in Museum Curatorial Arrangement',
    authors: 'Dagyeom Chung, Sun Ah Bae, Gisung Han, Seung Hyun Cha',
    year: '2026',
    thumbnails: [],
  },
  {
    id: 'pub-9',
    type: 'Conference',
    scope: 'Int.',
    venue: 'Proceedings of the 12th International Conference on Digital and Interactive Arts (ARTECH 2025), Braga, Portugal, 26-28 November 2025',
    title: 'A framework for analyzing XR media art through impossible spaces and interaction structures',
    link: 'https://dl.acm.org/doi/full/10.1145/3773699.3773931',
    authors: 'Jae Yeon Shin, Dagyeom Chung, Sun Ah Bae, Seung Hyun Cha',
    year: '2025',
    thumbnails: ['/images/pub-9-xr.png'],
  },
  {
    id: 'pub-8',
    type: 'Conference',
    scope: 'Int.',
    venue: 'IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct), 2025',
    title: 'Adaptive Virtual Reality Space Design Based on Real-Time User Emotion',
    link: 'https://ieeexplore.ieee.org/document/11236383',
    authors: 'Sun Ah Bae, Yujeung Eum, Hyun Woo Kim, Yeongjo Kim, Dahye Jeon, Jae Young Jang, Seung Hyun Cha',
    year: '2025',
    thumbnails: ['/images/pub-8-vr.png'],
  },
  {
    id: 'pub-7',
    type: 'Conference',
    scope: 'Int.',
    venue: 'International Symposium on Electronic/Emerging Art, 2025',
    title: 'The Soaring Serenity: An Immersive VR Artwork for Perspective Shift',
    link: 'https://www.isea-symposium-archives.org/wp-content/uploads/2025/10/ISEA2025-Proceedings.pdf',
    authors: 'Kirak Kim, Hyun Woo Kim, Sun Ah Bae, Jung Won Lee, Sungyoung Kim',
    year: '2025',
    thumbnails: ['/images/pub-7-1.png', '/images/pub-7-2.png', '/images/pub-7-3.png'],
  },
  {
    id: 'pub-6',
    type: 'Conference',
    scope: 'Int.',
    venue: 'Smart and Sustainable Built Environment, 2024',
    title: 'A Conceptual Framework for Designing User-Centric and Responsive Design Experiences in the Built Environment',
    link: 'https://doi.org/10.1007/978-981-96-4051-5_3',
    authors: 'Yujeung Eum, Sun Ah Bae, Hyun Woo Kim, Yoan Song, Seung Hyun Cha',
    year: '2024',
    thumbnails: ['/images/pub-6-cf.png'],
  },
  {
    id: 'pub-5',
    type: 'Conference',
    scope: 'Dom.',
    venue: 'Winter Conference of Society for Computational Design and Engineering, 2024',
    title: 'Analyzing space types with an HMD-based VR exhibition case study (HMD 기반 VR 전시 사례조사를 통한 공간 유형 분석)',
    link: 'https://drive.google.com/file/d/1ovc2Qj9ioG4B46TybArBP-Bcq4CQFJmI/view?usp=sharing',
    authors: 'Sun Ah Bae, Hyun Woo Kim, Seung Hyun Cha',
    year: '2024',
    thumbnails: ['/images/pub-5-1.png'],
  },
  {
    id: 'pub-4',
    type: 'Conference',
    scope: 'Dom.',
    venue: 'Winter Conference of Society for Computational Design and Engineering, 2024',
    title: 'Proposal for Design Research Directions to Enhance Virtual Spatial Experience - Focused on Visual Perception Research - (가상 공간 경험 향상을 위한 디자인 연구 방향 제안– 공간 인식 연구를 중심으로-)',
    link: 'https://drive.google.com/file/d/1Vbz9S-Ts0usGkI5LtFMDx93fYXFozrd5/view?usp=drive_link',
    authors: 'Hyun Woo Kim, Sun Ah Bae, Seung Hyun Cha',
    year: '2024',
    thumbnails: ['/images/pub-4-1.png'],
  },
  {
    id: 'pub-3',
    type: 'Conference',
    scope: 'Dom.',
    venue: 'The HCI Society of Korea, 2024',
    title: 'Ddancing Ppongsa : XR Collaborative Dance Game (땐싱뽕사: XR 협동 댄스 게임)',
    link: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11714856',
    video: 'https://youtu.be/zgRc7zjBsm8',
    authors: 'Sun Ah Bae, Kirak Kim, Sungpil Wang, Woontack Woo',
    year: '2024',
    thumbnails: ['/images/pub-3-1.png', '/images/pub-3-2.png', '/images/pub-3-3.png'],
  },
  {
    id: 'pub-2',
    type: 'Conference',
    scope: 'Dom.',
    venue: 'Korea Society of Design Science, 2022',
    title: 'A study on the Exhibition Robot for Visually Impaired People (전시 관람 관련 시각장애인의 이동 및 감상 보조를 위한 전시 로봇 연구)',
    link: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11714856',
    video: 'https://youtu.be/_C3HSRGN-7Y',
    authors: 'Sun Ah Bae, GeonHoo Son, SeungHun Yoo, JiHo Kim, DokShin Lim',
    year: '2022',
    thumbnails: ['/images/pub-2-1.png'],
  },
  {
    id: 'pub-1',
    type: 'Etc.',
    scope: 'Dom.',
    venue: 'The Seoul Institute, 2022',
    title: '텍스트 분석을 활용한 서울 전시 공간 아카이브 개선 방안 연구',
    link: 'https://www.si.re.kr/sites/default/files/20-17.pdf',
    authors: 'Joonhyung Bae, Sun Ah Bae, Jaehwang Lee',
    year: '2022',
    thumbnails: ['/images/pub-1-1.png', '/images/pub-1-2.png'],
  },
];

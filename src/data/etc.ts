/**
 * Etc. 섹션 데이터 — 필드가 화면에 보이는 순서 그대로입니다. 적은 대로 표시됩니다.
 *
 *  category : 그룹 제목 + TYPE 필터에 그대로 사용 (아래 etcCategories 중 하나)
 *  meta     : 제목 위 회색 정보 줄 (없으면 줄 자체를 생략)
 *  title    : 제목 (link → 제목 클릭, video → Video 버튼)
 *  subline  : 제목 아래 줄 — 'Sun Ah Bae'는 자동 밑줄 강조
 *
 *  그룹 표시 순서는 etcCategories 배열 순서를 따르고,
 *  같은 그룹 안에서는 이 파일에 적힌 순서대로 표시됩니다.
 */
export const etcCategories = [
  'Book',
  'Patent',
  'Experience',
  'Technical Contributor for Artworks',
  'Design',
  'Art Work',
  'Award and Honor',
  'Scholarship',
] as const;

export type EtcCategory = (typeof etcCategories)[number];

export interface EtcItem {
  id: string;
  category: EtcCategory;
  /** 제목 위 회색 정보 줄 (없으면 생략) */
  meta?: string;
  /** 제목 — 그대로 표시 */
  title: string;
  /** 제목에 걸리는 링크 (없으면 생략) */
  link?: string;
  /** Video 버튼 링크 (없으면 생략) */
  video?: string;
  /** 제목 아래 줄 */
  subline?: string;
  thumbnails?: string[];
}

export const etcItems: EtcItem[] = [
  // ---- Book ----
  {
    id: 'book-1',
    category: 'Book',
    meta: 'A&C 출판 · 2026',
    title: 'Comprehensive Study on Future Housing Vision and Strategy: Case Studies and Research for Deriving Near-Future Housing Directions (미래 주거 비전과 전략 종합 연구 : 근미래 주거 방향성 도출을 위한 사례 및 연구)',
    subline: 'Jin-kook Lee, Soyeon Lee, Seung Hyun Cha, Youngchae Kim, Hayun Kim, Jian Kim, Yunjung Hwang, Yujeung Eum, Sun Ah Bae, Hyoeun Seol',
  },

  // ---- Patent ----
  {
    id: 'patent-1',
    category: 'Patent',
    meta: 'Korean Patent Application No. 10-2026-0007653, Filed January 15, 2026',
    title: 'System and Method for Providing Emotion-Based Interactive Spatial Content (감정 기반 반응형 공간 콘텐츠 제공시스템 및 제공방법)',
    subline: 'Sun Ah Bae, Seung Hyun Cha, Yujeung Eum, Jae Young Jang, Yeongjo Kim, Dahye Jeon',
  },

  // ---- Experience ----
  {
    id: 'exp-1',
    category: 'Experience',
    title: '<International APETalk> 퍼실리테이터',
    subline: 'Facilitator · 한국문화예술위원회, Seoul · 2025',
    thumbnails: ['/images/exp-1-1.png'],
  },
  {
    id: 'exp-2',
    category: 'Experience',
    title: 'Visiting Scholar Event: Lab Tour and Technology Showcase for NTU Guests',
    subline: 'Presentation & Demonstration · KAIST, Republic of Korea · 2025',
    thumbnails: ['/images/exp-2-1.png', '/images/exp-2-2.png', '/images/exp-2-3.png', '/images/exp-2-4.png'],
  },
  {
    id: 'exp-3',
    category: 'Experience',
    title: 'HK PolyU Joint Workshop',
    subline: 'Presentation · Hong Kong Polytechnic University, Hong Kong · 2025',
    thumbnails: ['/images/exp-3-1.png', '/images/exp-3-2.png'],
  },

  // ---- Technical Contributor for Artworks ----
  {
    id: 'tech-1',
    category: 'Technical Contributor for Artworks',
    title: '<진리를 훔친 자 Thief of Truth>',
    link: 'https://joonhyungbae.com/#/post/2022-art-thief-of-truth',
    subline: '3D modeling & Rendering & VR development, Mover,Misc, Seoul, 2022',
    thumbnails: [
      '/images/tech-1-1.png',
      '/images/tech-1-2.png',
      '/images/tech-1-3.png',
      '/images/tech-1-4.png',
      '/images/tech-1-5.png',
      '/images/tech-1-6.png',
    ],
  },

  // ---- Design ----
  {
    id: 'design-1',
    category: 'Design',
    title: 'Future Space Lab introduction video',
    video: 'https://www.youtube.com/watch?v=4Fk_6BVnf_o',
    subline: 'Design the layout of FSL introduction video, Future Space Lab, 2024',
    thumbnails: ['/images/design-1-1.png'],
  },
  {
    id: 'design-2',
    category: 'Design',
    title: 'Signage design for KAIST Graduate School of Culture and Technology',
    subline: 'Design the CT signage, KAIST CT, 2023',
    thumbnails: ['/images/design-2-1.png'],
  },
  {
    id: 'design-3',
    category: 'Design',
    title: 'Future Space Lab Website Renewal',
    link: 'https://www.fsl.kaist.ac.kr/',
    subline: 'Redesign the FSL website, Future Space Lab, 2022',
    thumbnails: ['/images/design-3-1.png'],
  },

  // ---- Art Work ----
  {
    id: 'art-1',
    category: 'Art Work',
    title: '<어.. Uh..>, 2022, mixed media, 300 X 300 X 700 (mm)',
    video: 'https://youtu.be/LKfR1zKIPlY',
    subline: '주소과 졸업전시, 홍익대학교, 대한민국, 2022',
    thumbnails: ['/images/art-1-1.png', '/images/art-1-2.png'],
  },
  {
    id: 'art-2',
    category: 'Art Work',
    title: '<동동 DongDong>, 2022, mixed media, 420 X 350 X 800 (mm)',
    subline: '제 47회 야외조각전, 홍익대학교, 대한민국, 2022',
    thumbnails: ['/images/art-2-1.png', '/images/art-2-2.png'],
  },

  // ---- Award and Honor ----
  {
    id: 'award-1',
    category: 'Award and Honor',
    meta: '국가과학기술인력개발원 · 대한민국 · 2023',
    title: '국가 R&D 리얼챌린지 프로그램 우수 포스터상 수상',
    subline: 'Sun Ah Bae, Seohyeun Bae, Hyun Woo Kim, Kyung Taek Oh, Seung Hyun Cha',
    thumbnails: ['/images/award-1-1.png'],
  },
  {
    id: 'award-2',
    category: 'Award and Honor',
    meta: '서울산업진흥원 · 대한민국 · 2022',
    title: 'SW/DT 새싹(SeSAC) 경진대회 최우수상 수상',
    subline: 'Sun Ah Bae, GeonHoo Son, SeungHun Yoo, JiHo Kim, DokShin Lim',
    thumbnails: ['/images/award-2-1.png'],
  },
  {
    id: 'award-3',
    category: 'Award and Honor',
    meta: '넥슨컴퍼니, D타워 · 대한민국 · 2022',
    title: '제5회 D-Tech 기술 | 디자인 공모전 최우수상 수상',
    video: 'https://www.youtube.com/live/GVxkx1Iq8fI?si=iUiI-Gpo7kxHIhzt',
    subline: 'Sun Ah Bae, GeonHoo Son, SeungHun Yoo, JiHo Kim, DokShin Lim',
    thumbnails: ['/images/award-3-1.png'],
  },
  {
    id: 'award-4',
    category: 'Award and Honor',
    meta: '한국문화예술위원회 · 대한민국 · 2022',
    title: "온라인 미디어 예술활동 지원사업 '아트체인지업'",
    subline: 'Joonhyung Bae, Sun Ah Bae, Jaehwang Lee',
  },
  {
    id: 'award-5',
    category: 'Award and Honor',
    meta: '홍익대학교 · 대한민국 · 2022',
    title: '제 16회 공과대학 창의적 종합설계 경진대회 금상 수상',
    subline: 'Sun Ah Bae, GeonHoo Son, SeungHun Yoo, JiHo Kim, DokShin Lim',
  },
  {
    id: 'award-6',
    category: 'Award and Honor',
    meta: '홍익대학교 · 대한민국 · 2021',
    title: '홍익대학교 총장상',
    subline: 'Sun Ah Bae',
  },
  {
    id: 'award-7',
    category: 'Award and Honor',
    meta: '서울연구원 · 대한민국 · 2020',
    title: '작은연구 좋은서울 연구 지원금',
    subline: 'Joonhyung Bae, Sun Ah Bae, Jaehwang Lee',
  },

  // ---- Scholarship ----
  {
    id: 'schol-1',
    category: 'Scholarship',
    title: 'KAIST장학금(2025.03~Current, 전액)',
    subline: '한국과학기술원 · 대전, 대한민국 · 2025',
  },
  {
    id: 'schol-2',
    category: 'Scholarship',
    title: 'KAIST장학금(2023.03~2025.02, 전액)',
    subline: '한국과학기술원 · 대전, 대한민국 · 2023',
  },
  {
    id: 'schol-3',
    category: 'Scholarship',
    title: '예술체육비전장학금(2021.03~2022.12, 전액)',
    subline: '한국장학재단 · 대한민국 · 2021',
  },
  {
    id: 'schol-4',
    category: 'Scholarship',
    title: '홍익대학교 조소과 협동장학금(40%)',
    subline: '홍익대학교 · 대한민국 · 2020',
  },
  {
    id: 'schol-5',
    category: 'Scholarship',
    title: '홍익대학교 조소과 자주장학금(80%)',
    subline: '홍익대학교 · 대한민국 · 2020',
  },
  {
    id: 'schol-6',
    category: 'Scholarship',
    title: '홍익대학교 조소과 자주장학금(80%)',
    subline: '홍익대학교 · 대한민국 · 2020',
  },
];

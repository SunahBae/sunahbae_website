export interface Award {
  id: string;
  title: string;
  participants: string;
  organization: string;
  location: string;
  year: string;
  badges?: Array<{
    type: 'link' | 'video';
    label: string;
    url?: string;
  }>;
  thumbnails?: string[];
}

export const awards: Award[] = [
  {
    id: 'award-1',
    title: '국가 R&D 리얼챌린지 프로그램 우수 포스터상 수상',
    participants: 'Sun Ah Bae, Seohyeun Bae, Hyun Woo Kim, Kyung Taek Oh, Seung Hyun Cha',
    organization: '국가과학기술인력개발원',
    location: '대한민국',
    year: '2023',
    thumbnails: ['/images/award-1-1.png'],
  },
  {
    id: 'award-2',
    title: 'SW/DT 새싹(SeSAC) 경진대회 최우수상 수상',
    participants: 'Sun Ah Bae, GeonHoo Son, SeungHun Yoo, JiHo Kim, DokShin Lim',
    organization: '서울산업진흥원',
    location: '대한민국',
    year: '2022',
    thumbnails: ['/images/award-2-1.png'],
  },
  {
    id: 'award-3',
    title: '제5회 D-Tech 기술 | 디자인 공모전 최우수상 수상',
    participants: 'Sun Ah Bae, GeonHoo Son, SeungHun Yoo, JiHo Kim, DokShin Lim',
    organization: '넥슨컴퍼니, D타워',
    location: '대한민국',
    year: '2022',
    badges: [
      { type: 'video', label: 'Video', url: 'https://www.youtube.com/live/GVxkx1Iq8fI?si=iUiI-Gpo7kxHIhzt' },
    ],
    thumbnails: ['/images/award-3-1.png'],
  },
  {
    id: 'award-4',
    title: '온라인 미디어 예술활동 지원사업 \'아트체인지업\'',
    participants: 'Joonhyung Bae, Sun Ah Bae, Jaehwang Lee',
    organization: '한국문화예술위원회',
    location: '대한민국',
    year: '2022',
  },
  {
    id: 'award-5',
    title: '제 16회 공과대학 창의적 종합설계 경진대회 금상 수상',
    participants: 'Sun Ah Bae, GeonHoo Son, SeungHun Yoo, JiHo Kim, DokShin Lim',
    organization: '홍익대학교',
    location: '대한민국',
    year: '2022',
  },
  {
    id: 'award-6',
    title: '홍익대학교 총장상',
    participants: 'Sun Ah Bae',
    organization: '홍익대학교',
    location: '대한민국',
    year: '2021',
  },
  {
    id: 'award-7',
    title: '작은연구 좋은서울 연구 지원금',
    participants: 'Joonhyung Bae, Sun Ah Bae, Jaehwang Lee',
    organization: '서울연구원',
    location: '대한민국',
    year: '2020',
  },
];

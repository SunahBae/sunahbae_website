export interface Book {
  id: string;
  title: string;
  authors: string;
  publisher: string;
  year: string;
  badges?: Array<{
    type: 'link' | 'video';
    label: string;
    url?: string;
  }>;
  thumbnails?: string[];
}

export const books: Book[] = [
  {
    id: 'book-1',
    title: 'Comprehensive Study on Future Housing Vision and Strategy: Case Studies and Research for Deriving Near-Future Housing Directions (미래 주거 비전과 전략 종합 연구 : 근미래 주거 방향성 도출을 위한 사례 및 연구)',
    authors: 'Jin-kook Lee, Soyeon Lee, Seung Hyun Cha, Youngchae Kim, Hayun Kim, Jian Kim, Yunjung Hwang, Yujeung Eum, Sun Ah Bae, Hyoeun Seol',
    publisher: 'A&C 출판',
    year: '2026',
  },
];

export interface Patent {
  id: string;
  title: string;
  inventors: string;
  patentNumber: string;
  year: string;
  badges?: Array<{
    type: 'link' | 'video';
    label: string;
    url?: string;
  }>;
  thumbnails?: string[];
}

export const patents: Patent[] = [
  {
    id: 'patent-1',
    title: 'System and Method for Providing Emotion-Based Interactive Spatial Content (감정 기반 반응형 공간 콘텐츠 제공시스템 및 제공방법)',
    inventors: 'Sun Ah Bae, Seung Hyun Cha, Yujeung Eum, Jae Young Jang, Yeongjo Kim, Dahye Jeon',
    patentNumber: 'Korean Patent Application No. 10-2026-0007653, Filed January 15, 2026',
    year: '2026',
  },
];

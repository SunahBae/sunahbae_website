export interface Scholarship {
  id: string;
  name: string;
  period: string;
  organization: string;
  location: string;
  year: string;
}

export const scholarships: Scholarship[] = [
  {
    id: 'schol-1',
    name: 'KAIST장학금',
    period: '(2025.03~Current, 전액)',
    organization: '한국과학기술원',
    location: '대전, 대한민국',
    year: '2025',
  },
  {
    id: 'schol-2',
    name: 'KAIST장학금',
    period: '(2023.03~2025.02, 전액)',
    organization: '한국과학기술원',
    location: '대전, 대한민국',
    year: '2023',
  },
  {
    id: 'schol-3',
    name: '예술체육비전장학금',
    period: '(2021.03~2022.12, 전액)',
    organization: '한국장학재단',
    location: '대한민국',
    year: '2021',
  },
  {
    id: 'schol-4',
    name: '홍익대학교 조소과 협동장학금',
    period: '(40%)',
    organization: '홍익대학교',
    location: '대한민국',
    year: '2020',
  },
  {
    id: 'schol-5',
    name: '홍익대학교 조소과 자주장학금',
    period: '(80%)',
    organization: '홍익대학교',
    location: '대한민국',
    year: '2020',
  },
  {
    id: 'schol-6',
    name: '홍익대학교 조소과 자주장학금',
    period: '(80%)',
    organization: '홍익대학교',
    location: '대한민국',
    year: '2020',
  },
];

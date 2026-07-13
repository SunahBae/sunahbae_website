export interface NewsItem {
  date: string;
  /** badge color: 'paper' = green, 'talk' = blue */
  kind: 'paper' | 'talk';
  kindLabel: string;
  /** link target — a section anchor (e.g. '#publication') or an external URL */
  href: string;
  /** headline; may contain <strong>…</strong> for emphasis */
  html: string;
}

// To add/replace a news item, just edit this array.
// NOTE: the `date` values are placeholders — adjust the month to the real
// acceptance date. `href` is the id of the matching publication row
// (e.g. '#pub-11') so clicking scrolls to that item in the Publication section.
export const news: NewsItem[] = [
  {
    date: '2026.06',
    kind: 'paper',
    kindLabel: 'Paper',
    href: '#pub-11', // "Virtual reality transition to underground"
    html: '"Virtual reality transition to underground" accepted to <strong>Scientific Reports</strong> (SCIE Q1)',
  },
  {
    date: '2026.06',
    kind: 'paper',
    kindLabel: 'Paper',
    href: '#pub-10', // "The Effect of Artwork Size on Visitor Attention"
    html: '"The Effect of Artwork Size on Visitor Attention" accepted to <strong>Design Computing and Cognition \'26</strong>',
  },
];

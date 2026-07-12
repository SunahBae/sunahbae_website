import React, { useRef, useState } from 'react';
import { books } from '@/data/books';
import { patents } from '@/data/patents';
import { experiences } from '@/data/experience';
import { technicalContributions } from '@/data/technicalContributions';
import { designItems } from '@/data/design';
import { artworks } from '@/data/artwork';
import { awards } from '@/data/awards';
import { scholarships } from '@/data/scholarships';
import { EditorialRow, FilterGroup, SectionScrollbar, highlightMe } from './EditorialList';

type EtcType =
  | 'book'
  | 'patent'
  | 'experience'
  | 'artwork-tech'
  | 'design'
  | 'artwork'
  | 'award'
  | 'scholarship';

interface EtcRow {
  id: string;
  etype: EtcType;
  title: string;
  meta?: string;
  subline?: React.ReactNode;
  titleUrl?: string;
  videoUrl?: string;
  thumbnails?: string[];
}

const TYPE_LABELS: Array<{ value: EtcType; label: string }> = [
  { value: 'book', label: 'Book' },
  { value: 'patent', label: 'Patent' },
  { value: 'experience', label: 'Experience' },
  { value: 'artwork-tech', label: 'Technical Contributor for Artworks' },
  { value: 'design', label: 'Design' },
  { value: 'artwork', label: 'Art Work' },
  { value: 'award', label: 'Award and Honor' },
  { value: 'scholarship', label: 'Scholarship' },
];

type BadgeList = Array<{ type: string; label: string; url?: string }> | undefined;
const badgeUrl = (badges: BadgeList, type: 'link' | 'video'): string | undefined =>
  badges?.find((b) => b.type === type)?.url;

const rows: EtcRow[] = [
  ...books.map((book): EtcRow => ({
    id: book.id,
    etype: 'book',
    title: book.title,
    meta: `${book.publisher} · ${book.year}`,
    subline: highlightMe(book.authors),
    titleUrl: badgeUrl(book.badges, 'link'),
    videoUrl: badgeUrl(book.badges, 'video'),
    thumbnails: book.thumbnails,
  })),
  ...patents.map((patent): EtcRow => ({
    id: patent.id,
    etype: 'patent',
    title: patent.title,
    meta: patent.patentNumber,
    subline: highlightMe(patent.inventors),
    titleUrl: badgeUrl(patent.badges, 'link'),
    videoUrl: badgeUrl(patent.badges, 'video'),
    thumbnails: patent.thumbnails,
  })),
  ...experiences.map((exp): EtcRow => ({
    id: exp.id,
    etype: 'experience',
    title: exp.title,
    subline: `${exp.role} · ${exp.organization}${exp.location ? `, ${exp.location}` : ''} · ${exp.year}`,
    thumbnails: exp.thumbnails,
  })),
  ...technicalContributions.map((item): EtcRow => ({
    id: item.id,
    etype: 'artwork-tech',
    title: item.title,
    subline: item.description,
    titleUrl: badgeUrl(item.badges, 'link'),
    videoUrl: badgeUrl(item.badges, 'video'),
    thumbnails: item.thumbnails,
  })),
  ...designItems.map((item): EtcRow => ({
    id: item.id,
    etype: 'design',
    title: item.title,
    subline: item.description,
    titleUrl: badgeUrl(item.badges, 'link'),
    videoUrl: badgeUrl(item.badges, 'video'),
    thumbnails: item.thumbnails,
  })),
  ...artworks.map((item): EtcRow => ({
    id: item.id,
    etype: 'artwork',
    title: item.title,
    subline: item.description,
    titleUrl: badgeUrl(item.badges, 'link'),
    videoUrl: badgeUrl(item.badges, 'video'),
    thumbnails: item.thumbnails,
  })),
  ...awards.map((award): EtcRow => ({
    id: award.id,
    etype: 'award',
    title: award.title,
    meta: `${award.organization} · ${award.location} · ${award.year}`,
    subline: highlightMe(award.participants),
    titleUrl: badgeUrl(award.badges, 'link'),
    videoUrl: badgeUrl(award.badges, 'video'),
    thumbnails: award.thumbnails,
  })),
  ...scholarships.map((scholarship): EtcRow => ({
    id: scholarship.id,
    etype: 'scholarship',
    title: `${scholarship.name}${scholarship.period}`,
    subline: `${scholarship.organization} · ${scholarship.location} · ${scholarship.year}`,
  })),
];

export const EtcSection: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [types, setTypes] = useState<string[]>([]);

  const toggle = (value: string) =>
    setTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  const typeOptions = TYPE_LABELS;

  const visible = rows.filter((r) => types.length === 0 || types.includes(r.etype));

  const groups = TYPE_LABELS.map(({ value, label }) => ({
    label,
    items: visible.filter((r) => r.etype === value),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="ed-section" id="etc">
      <div className="side-col">
        <p className="label">Etc.</p>
        <div className="side-filters">
          <FilterGroup
            label="Type"
            options={typeOptions}
            selected={types}
            onToggle={toggle}
          />
          <button
            className={`filter-reset${types.length > 0 ? ' show' : ''}`}
            onClick={() => setTypes([])}
          >
            Reset filters
          </button>
        </div>
        <SectionScrollbar listRef={listRef} contentKey={types.join()} />
      </div>
      <div className="ed-content">
        <div className="ed-list" ref={listRef}>
          {groups.map(({ label, items }) => (
            <div className="year-group" key={label}>
              <p className="year">{label}</p>
              {items.map((row) => (
                <EditorialRow
                  key={row.id}
                  meta={row.meta && <span>{row.meta}</span>}
                  title={row.title}
                  titleUrl={row.titleUrl}
                  videoUrl={row.videoUrl}
                  subline={row.subline}
                  thumbnails={row.thumbnails}
                />
              ))}
            </div>
          ))}
          {visible.length === 0 && (
            <p className="empty-state">No items match the selected filters.</p>
          )}
        </div>
      </div>
    </section>
  );
};

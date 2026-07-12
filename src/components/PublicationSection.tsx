import React, { useMemo, useRef, useState } from 'react';
import { publications, Publication } from '@/data/publications';
import { EditorialRow, FilterGroup, SectionScrollbar, highlightMe } from './EditorialList';

type PubType = 'journal' | 'conf' | 'ect';

const getType = (pub: Publication): PubType => {
  if (pub.badges.some((b) => b.type === 'journal')) return 'journal';
  if (pub.badges.some((b) => b.type === 'conf')) return 'conf';
  return 'ect';
};

const getScope = (pub: Publication): string | undefined => {
  if (pub.badges.some((b) => b.type === 'int')) return 'Int.';
  if (pub.badges.some((b) => b.type === 'dom')) return 'Dom.';
  return undefined;
};

const getBadgeUrl = (pub: Publication, type: 'link' | 'video'): string | undefined =>
  pub.badges.find((b) => b.type === type)?.url;

/**
 * Splits a venue like "Virtual Reality, Springer Nature [SCIE, Q1, 11.2%]"
 * into the display text and the journal grade for the badge.
 */
const parseVenue = (venue: string): { text: string; grade?: string } => {
  const match = venue.match(/^(.*?)\s*\[([^\]]*)\]\s*$/);
  if (!match) return { text: venue };
  const parts = match[2].split(',').map((s) => s.trim());
  const acceptance = parts.find((p) => p.includes('%'));
  const grade = parts.filter((p) => !p.includes('%')).join(' ');
  return {
    text: match[1] + (acceptance ? ` · Acceptance ${acceptance}` : ''),
    grade: grade || undefined,
  };
};

const badgeLabel = (type: PubType, grade?: string): string => {
  if (type === 'journal') return grade ? `Journal · ${grade}` : 'Journal';
  if (type === 'conf') return 'Conference';
  return 'Etc.';
};

export const PublicationSection: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [types, setTypes] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (value: string) =>
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  const allYears = useMemo(
    () =>
      [...new Set(publications.map((p) => p.year))].sort(
        (a, b) => Number(b) - Number(a)
      ),
    []
  );

  // Options are cross-filtered: each group only offers values that still yield
  // results given the OTHER group's selection (a selected value stays visible
  // so it can always be unchecked).
  const typeOptions = [
    { value: 'journal', label: 'Journal' },
    { value: 'conf', label: 'Conference' },
  ].filter(
    (t) =>
      types.includes(t.value) ||
      publications.some(
        (p) =>
          getType(p) === t.value &&
          (years.length === 0 || years.includes(p.year))
      )
  );

  const yearOptions = allYears
    .filter(
      (year) =>
        years.includes(year) ||
        publications.some(
          (p) =>
            p.year === year &&
            (types.length === 0 || types.includes(getType(p)))
        )
    )
    .map((year) => ({ value: year, label: year }));

  const visible = publications.filter(
    (p) =>
      (types.length === 0 || types.includes(getType(p))) &&
      (years.length === 0 || years.includes(p.year))
  );

  const groups = allYears
    .map((year) => ({
      year,
      items: visible.filter((p) => p.year === year),
    }))
    .filter((g) => g.items.length > 0);

  const hasFilters = types.length > 0 || years.length > 0;

  return (
    <section className="ed-section" id="publication">
      <div className="side-col">
        <p className="label">Publication</p>
        <div className="side-filters">
          <FilterGroup
            label="Type"
            options={typeOptions}
            selected={types}
            onToggle={toggle(setTypes)}
          />
          <FilterGroup
            label="Year"
            options={yearOptions}
            selected={years}
            onToggle={toggle(setYears)}
          />
          <button
            className={`filter-reset${hasFilters ? ' show' : ''}`}
            onClick={() => {
              setTypes([]);
              setYears([]);
            }}
          >
            Reset filters
          </button>
        </div>
        <SectionScrollbar listRef={listRef} contentKey={`${types.join()}|${years.join()}`} />
      </div>
      <div className="ed-content">
        <div className="ed-list" ref={listRef}>
          {groups.map(({ year, items }) => (
          <div className="year-group" key={year}>
            <p className="year">{year}</p>
            {items.map((pub) => {
              const type = getType(pub);
              const scope = getScope(pub);
              const venue = parseVenue(pub.venue);
              return (
                <EditorialRow
                  key={pub.id}
                  meta={
                    <>
                      {pub.status && (
                        <span className="ed-badge submitted">{pub.status}</span>
                      )}
                      <span className={`ed-badge ${type === 'ect' ? 'etc' : type}`}>
                        {badgeLabel(type, venue.grade)}
                      </span>
                      {scope && <span className="ed-badge scope">{scope}</span>}
                      <span>{venue.text}</span>
                    </>
                  }
                  title={pub.title}
                  titleUrl={getBadgeUrl(pub, 'link')}
                  videoUrl={getBadgeUrl(pub, 'video')}
                  subline={highlightMe(pub.authors)}
                  thumbnails={pub.thumbnails}
                />
              );
            })}
          </div>
          ))}
          {visible.length === 0 && (
            <p className="empty-state">No publications match the selected filters.</p>
          )}
        </div>
      </div>
    </section>
  );
};

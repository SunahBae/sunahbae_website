import React, { useMemo, useRef, useState } from 'react';
import { publications, Publication } from '@/data/publications';
import { EditorialRow, FilterGroup, SectionScrollbar, highlightMe } from './EditorialList';

/** TYPE 필터·배지 색 분류: type 텍스트의 시작 단어로 판별 */
const getCategory = (pub: Publication): 'journal' | 'conf' | 'ect' => {
  const t = pub.type.toLowerCase();
  if (t.startsWith('journal')) return 'journal';
  if (t.startsWith('conference')) return 'conf';
  return 'ect';
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
          getCategory(p) === t.value &&
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
            (types.length === 0 || types.includes(getCategory(p)))
        )
    )
    .map((year) => ({ value: year, label: year }));

  const visible = publications.filter(
    (p) =>
      (types.length === 0 || types.includes(getCategory(p))) &&
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
              const category = getCategory(pub);
              return (
                <EditorialRow
                  key={pub.id}
                  id={pub.id}
                  meta={
                    <>
                      {pub.status && (
                        <span className="ed-badge submitted">{pub.status}</span>
                      )}
                      <span className={`ed-badge ${category === 'ect' ? 'etc' : category}`}>
                        {pub.type}
                      </span>
                      {pub.scope && <span className="ed-badge scope">{pub.scope}</span>}
                      <span>{pub.venue}</span>
                    </>
                  }
                  title={pub.title}
                  titleUrl={pub.link}
                  videoUrl={pub.video}
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

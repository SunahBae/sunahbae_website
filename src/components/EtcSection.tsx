import React, { useRef, useState } from 'react';
import { etcItems, etcCategories } from '@/data/etc';
import { EditorialRow, FilterGroup, SectionScrollbar, highlightMe } from './EditorialList';

export const EtcSection: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  const typeOptions = etcCategories.map((c) => ({ value: c, label: c }));

  const visible = etcItems.filter(
    (item) => selected.length === 0 || selected.includes(item.category)
  );

  const groups = etcCategories
    .map((category) => ({
      category,
      items: visible.filter((item) => item.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section className="ed-section" id="etc">
      <div className="side-col">
        <p className="label">Etc.</p>
        <div className="side-filters">
          <FilterGroup
            label="Type"
            options={typeOptions}
            selected={selected}
            onToggle={toggle}
          />
          <button
            className={`filter-reset${selected.length > 0 ? ' show' : ''}`}
            onClick={() => setSelected([])}
          >
            Reset filters
          </button>
        </div>
        <SectionScrollbar listRef={listRef} contentKey={selected.join()} />
      </div>
      <div className="ed-content">
        <div className="ed-list" ref={listRef}>
          {groups.map(({ category, items }) => (
            <div className="year-group" key={category}>
              <p className="year">{category}</p>
              {items.map((item) => (
                <EditorialRow
                  key={item.id}
                  id={item.id}
                  meta={item.meta && <span>{item.meta}</span>}
                  title={item.title}
                  titleUrl={item.link}
                  videoUrl={item.video}
                  subline={item.subline && highlightMe(item.subline)}
                  thumbnails={item.thumbnails}
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

import React from 'react';

export type FilterType = 'all' | 'publication' | 'project' | 'ect';

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'publication', label: 'Publication' },
  { key: 'project', label: 'Project' },
  { key: 'ect', label: 'Etc.' },
];

export const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="cat-nav-wrap">
      <div className="site-container cat-nav">
        <div className="cat-pills" role="group" aria-label="Content category">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              className={activeFilter === key ? 'active' : ''}
              onClick={() => onFilterChange(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

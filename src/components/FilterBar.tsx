import React from 'react';
import { FilterChip } from './FilterChip';

export type FilterType = 'all' | 'publication' | 'project' | 'ect';

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'publication', label: 'Publication' },
  { key: 'project', label: 'Project' },
  { key: 'ect', label: 'Ect' },
];

export const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="section-divider flex-1 mr-6" />
      <div className="flex items-center gap-2">
        {filters.map(({ key, label }) => (
          <FilterChip
            key={key}
            label={label}
            isActive={activeFilter === key}
            onClick={() => onFilterChange(key)}
          />
        ))}
      </div>
    </div>
  );
};

import React from 'react';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const FilterChip: React.FC<FilterChipProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={isActive ? 'chip-filter-active' : 'chip-filter'}
    >
      {label}
    </button>
  );
};

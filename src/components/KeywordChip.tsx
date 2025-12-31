import React from 'react';

interface KeywordChipProps {
  label: string;
}

export const KeywordChip: React.FC<KeywordChipProps> = ({ label }) => {
  return <span className="chip-keyword">{label}</span>;
};

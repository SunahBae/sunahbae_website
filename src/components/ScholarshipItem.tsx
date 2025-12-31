import React from 'react';
import type { Scholarship } from '@/data/scholarships';

interface ScholarshipItemProps {
  scholarship: Scholarship;
}

export const ScholarshipItem: React.FC<ScholarshipItemProps> = ({ scholarship }) => {
  return (
    <li className="text-sm text-foreground">
      {scholarship.name}{scholarship.period}, {scholarship.organization}, {scholarship.location}, {scholarship.year}
    </li>
  );
};

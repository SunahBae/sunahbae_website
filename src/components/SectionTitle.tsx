import React from 'react';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-lg font-semibold tracking-wide uppercase text-foreground mb-6">
      {title}
    </h2>
  );
};
